import type { Metadata } from 'next';

export interface GenerateMetadataProps {
  params: Promise<{
    locale: string;
  }>;
}

export type GenerateMetadata = (params: GenerateMetadataProps) => Promise<Metadata>;
