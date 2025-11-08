export type SocialPlatform = 'instagram-post' | 'instagram-story' | 'instagram-reel' | 'facebook-post' | 'facebook-cover' | 'twitter-post' | 'twitter-header' | 'linkedin-post' | 'linkedin-cover' | 'youtube-thumbnail' | 'pinterest-pin'

export interface TemplateSize {
  width: number
  height: number
  label: string
}

export const PLATFORM_SIZES: Record<SocialPlatform, TemplateSize> = {
  'instagram-post': { width: 1080, height: 1080, label: 'Instagram Post (1:1)' },
  'instagram-story': { width: 1080, height: 1920, label: 'Instagram Story (9:16)' },
  'instagram-reel': { width: 1080, height: 1920, label: 'Instagram Reel (9:16)' },
  'facebook-post': { width: 1200, height: 630, label: 'Facebook Post' },
  'facebook-cover': { width: 820, height: 312, label: 'Facebook Cover' },
  'twitter-post': { width: 1200, height: 675, label: 'Twitter Post' },
  'twitter-header': { width: 1500, height: 500, label: 'Twitter Header' },
  'linkedin-post': { width: 1200, height: 627, label: 'LinkedIn Post' },
  'linkedin-cover': { width: 1584, height: 396, label: 'LinkedIn Cover' },
  'youtube-thumbnail': { width: 1280, height: 720, label: 'YouTube Thumbnail' },
  'pinterest-pin': { width: 1000, height: 1500, label: 'Pinterest Pin (2:3)' },
}

export interface TextElement {
  id: string
  type: 'text'
  content: string
  x: number
  y: number
  fontSize: number
  fontFamily: string
  fontWeight: 'normal' | 'bold' | '600' | '700' | '800' | '900'
  color: string
  align: 'left' | 'center' | 'right'
  maxWidth?: number
}

export interface ImageElement {
  id: string
  type: 'image'
  src: string
  x: number
  y: number
  width: number
  height: number
  opacity: number
  filters?: {
    brightness?: number
    contrast?: number
    saturation?: number
    blur?: number
  }
}

export interface ShapeElement {
  id: string
  type: 'rectangle' | 'circle' | 'line'
  x: number
  y: number
  width: number
  height: number
  fill: string
  stroke?: string
  strokeWidth?: number
  opacity: number
}

export type CanvasElement = TextElement | ImageElement | ShapeElement

export interface Template {
  id: string
  name: string
  platform: SocialPlatform
  thumbnail: string
  category: 'business' | 'personal' | 'promotional' | 'quote' | 'announcement'
  elements: CanvasElement[]
  background: {
    type: 'color' | 'gradient' | 'image'
    value: string | { start: string; end: string; direction: string }
  }
}

export interface SavedDesign {
  id?: string
  user_id?: string
  name: string
  platform: SocialPlatform
  elements: CanvasElement[]
  background: Template['background']
  thumbnail?: string
  created_at?: string
  updated_at?: string
}

export interface BrandKit {
  id?: string
  user_id?: string
  name: string
  colors: string[]
  fonts: string[]
  logos: string[]
  created_at?: string
}
