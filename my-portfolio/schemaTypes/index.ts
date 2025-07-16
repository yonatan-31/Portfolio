
import { type SchemaTypeDefinition } from 'sanity'
import pageInfo from './pageInfo'
import experience from './experience'
import project from './project'
import skill from './skill'
import social from './social'

export const schemaTypes: SchemaTypeDefinition[] = [
  pageInfo,
  experience,
  project,
  skill,
  social
];
