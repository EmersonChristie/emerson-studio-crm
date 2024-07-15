import { OpenApiGeneratorV3, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { healthCheckRegistry } from '@/api/healthCheck/healthCheckRouter';
import { userRegistry } from '@/api/user/userRouter';
import { artworkRegistry } from '@/api/artwork/artworkRouter';

export function generateOpenAPIDocument() {
  const registry = new OpenAPIRegistry([healthCheckRegistry, userRegistry, artworkRegistry]);

  // Register the cookieAuth security scheme
  const cookieAuth = registry.registerComponent('securitySchemes', 'cookieAuth', {
    type: 'apiKey',
    in: 'cookie',
    name: 'token',
  });

  const generator = new OpenApiGeneratorV3(registry.definitions);

  return generator.generateDocument({
    openapi: '3.0.0',
    info: {
      version: '1.0.0',
      title: 'Swagger API',
    },
    externalDocs: {
      description: 'View the raw OpenAPI Specification in JSON format',
      url: '/swagger.json',
    },
    security: [{ [cookieAuth.name]: [] }],
  });
}
