/// <reference types="vite/client" />

interface ImportMetaEnv {
  /**
   * Optional POST endpoint for the enquiry form. When set, the form sends JSON
   * instead of composing a mailto. See the deploy notes in README.md.
   */
  readonly VITE_ENQUIRY_ENDPOINT?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
