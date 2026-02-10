export type VideoConfig = {
  readonly id: string
  readonly title: string
  readonly theme: {
    readonly background: readonly string[]
    readonly overlay: string
  }
  readonly hook: {
    readonly lines: readonly string[]
    readonly bgImage: string
    readonly accentColor?: string
  }
  readonly problem: {
    readonly items: readonly { readonly emoji: string; readonly text: string }[]
    readonly bgImage: string
  }
  readonly solution: {
    readonly headline: readonly string[]
    readonly features: readonly { readonly icon: string; readonly text: string }[]
    readonly productImage: string
    readonly bgImage: string
  }
  readonly proof: {
    readonly title: string
    readonly stats: readonly {
      readonly value: number
      readonly suffix: string
      readonly label: string
      readonly color: string
    }[]
    readonly personImage: string
  }
  readonly cta: {
    readonly badge: string
    readonly price: string
    readonly priceNote: string
    readonly ctaText: string
    readonly scarcity: string
    readonly productImage: string
    readonly bgImage: string
  }
}
