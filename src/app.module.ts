import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { PokemonModule } from './pokemon/pokemon.module';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { envConfiguration } from './config/app.config';
import { joiValidationSchema } from './config/joi-validation';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [envConfiguration],
      validationSchema: joiValidationSchema,
    }),
    PokemonModule,
    MongooseModule.forRoot(process.env.MONGO_URL),
    CommonModule,
    SeedModule,
  ],
})
export class AppModule {}
