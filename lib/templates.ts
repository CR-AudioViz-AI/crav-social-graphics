import { Template, PLATFORM_SIZES } from '@/types/graphics'

export const TEMPLATE_LIBRARY: Template[] = [
  // INSTAGRAM POSTS
  {
    id: 'insta-quote-1',
    name: 'Motivational Quote',
    platform: 'instagram-post',
    thumbnail: '',
    category: 'quote',
    background: {
      type: 'gradient',
      value: { start: '#667eea', end: '#764ba2', direction: '135deg' }
    },
    elements: [
      {
        id: 'text-1',
        type: 'text',
        content: 'Your inspiring quote here',
        x: 540,
        y: 400,
        fontSize: 64,
        fontFamily: 'Arial',
        fontWeight: 'bold',
        color: '#FFFFFF',
        align: 'center',
        maxWidth: 900
      },
      {
        id: 'text-2',
        type: 'text',
        content: '- Author Name',
        x: 540,
        y: 650,
        fontSize: 32,
        fontFamily: 'Arial',
        fontWeight: 'normal',
        color: '#FFFFFF',
        align: 'center'
      }
    ]
  },
  
  {
    id: 'insta-promo-1',
    name: 'Sale Announcement',
    platform: 'instagram-post',
    thumbnail: '',
    category: 'promotional',
    background: {
      type: 'color',
      value: '#FF6B6B'
    },
    elements: [
      {
        id: 'shape-1',
        type: 'circle',
        x: 540,
        y: 300,
        width: 400,
        height: 400,
        fill: '#FFFFFF',
        opacity: 0.2
      },
      {
        id: 'text-1',
        type: 'text',
        content: 'SALE',
        x: 540,
        y: 380,
        fontSize: 120,
        fontFamily: 'Arial',
        fontWeight: '900',
        color: '#FFFFFF',
        align: 'center'
      },
      {
        id: 'text-2',
        type: 'text',
        content: '50% OFF',
        x: 540,
        y: 520,
        fontSize: 96,
        fontFamily: 'Arial',
        fontWeight: 'bold',
        color: '#FFFFFF',
        align: 'center'
      },
      {
        id: 'text-3',
        type: 'text',
        content: 'LIMITED TIME ONLY',
        x: 540,
        y: 700,
        fontSize: 32,
        fontFamily: 'Arial',
        fontWeight: '600',
        color: '#FFFFFF',
        align: 'center'
      }
    ]
  },

  {
    id: 'insta-business-1',
    name: 'Professional Announcement',
    platform: 'instagram-post',
    thumbnail: '',
    category: 'business',
    background: {
      type: 'color',
      value: '#003366'
    },
    elements: [
      {
        id: 'shape-1',
        type: 'rectangle',
        x: 100,
        y: 200,
        width: 880,
        height: 680,
        fill: '#FFFFFF',
        opacity: 0.95
      },
      {
        id: 'text-1',
        type: 'text',
        content: 'ANNOUNCEMENT',
        x: 540,
        y: 320,
        fontSize: 48,
        fontFamily: 'Arial',
        fontWeight: 'bold',
        color: '#003366',
        align: 'center'
      },
      {
        id: 'text-2',
        type: 'text',
        content: 'Your message here',
        x: 540,
        y: 480,
        fontSize: 36,
        fontFamily: 'Arial',
        fontWeight: 'normal',
        color: '#333333',
        align: 'center',
        maxWidth: 750
      },
      {
        id: 'text-3',
        type: 'text',
        content: 'www.yourwebsite.com',
        x: 540,
        y: 720,
        fontSize: 28,
        fontFamily: 'Arial',
        fontWeight: '600',
        color: '#00CED1',
        align: 'center'
      }
    ]
  },

  // INSTAGRAM STORIES
  {
    id: 'story-gradient-1',
    name: 'Gradient Story',
    platform: 'instagram-story',
    thumbnail: '',
    category: 'personal',
    background: {
      type: 'gradient',
      value: { start: '#f093fb', end: '#f5576c', direction: '180deg' }
    },
    elements: [
      {
        id: 'text-1',
        type: 'text',
        content: 'Your Story',
        x: 540,
        y: 960,
        fontSize: 96,
        fontFamily: 'Arial',
        fontWeight: 'bold',
        color: '#FFFFFF',
        align: 'center'
      }
    ]
  },

  {
    id: 'story-cta-1',
    name: 'Call to Action Story',
    platform: 'instagram-story',
    thumbnail: '',
    category: 'promotional',
    background: {
      type: 'color',
      value: '#4158D0'
    },
    elements: [
      {
        id: 'text-1',
        type: 'text',
        content: 'SWIPE UP',
        x: 540,
        y: 800,
        fontSize: 72,
        fontFamily: 'Arial',
        fontWeight: 'bold',
        color: '#FFFFFF',
        align: 'center'
      },
      {
        id: 'shape-1',
        type: 'rectangle',
        x: 340,
        y: 900,
        width: 400,
        height: 120,
        fill: '#FFFFFF',
        opacity: 1
      },
      {
        id: 'text-2',
        type: 'text',
        content: 'Learn More',
        x: 540,
        y: 960,
        fontSize: 48,
        fontFamily: 'Arial',
        fontWeight: 'bold',
        color: '#4158D0',
        align: 'center'
      }
    ]
  },

  // FACEBOOK POSTS
  {
    id: 'fb-event-1',
    name: 'Event Announcement',
    platform: 'facebook-post',
    thumbnail: '',
    category: 'announcement',
    background: {
      type: 'gradient',
      value: { start: '#8E2DE2', end: '#4A00E0', direction: '135deg' }
    },
    elements: [
      {
        id: 'text-1',
        type: 'text',
        content: 'JOIN US',
        x: 600,
        y: 200,
        fontSize: 72,
        fontFamily: 'Arial',
        fontWeight: 'bold',
        color: '#FFFFFF',
        align: 'center'
      },
      {
        id: 'text-2',
        type: 'text',
        content: 'Event Name',
        x: 600,
        y: 315,
        fontSize: 56,
        fontFamily: 'Arial',
        fontWeight: '600',
        color: '#FFFFFF',
        align: 'center'
      },
      {
        id: 'text-3',
        type: 'text',
        content: 'Date | Time | Location',
        x: 600,
        y: 450,
        fontSize: 36,
        fontFamily: 'Arial',
        fontWeight: 'normal',
        color: '#FFFFFF',
        align: 'center'
      }
    ]
  },

  // TWITTER POSTS
  {
    id: 'twitter-tip-1',
    name: 'Quick Tip',
    platform: 'twitter-post',
    thumbnail: '',
    category: 'business',
    background: {
      type: 'color',
      value: '#1DA1F2'
    },
    elements: [
      {
        id: 'shape-1',
        type: 'rectangle',
        x: 100,
        y: 150,
        width: 1000,
        height: 375,
        fill: '#FFFFFF',
        opacity: 0.95
      },
      {
        id: 'text-1',
        type: 'text',
        content: 'PRO TIP',
        x: 600,
        y: 230,
        fontSize: 48,
        fontFamily: 'Arial',
        fontWeight: 'bold',
        color: '#1DA1F2',
        align: 'center'
      },
      {
        id: 'text-2',
        type: 'text',
        content: 'Your tip content here',
        x: 600,
        y: 340,
        fontSize: 36,
        fontFamily: 'Arial',
        fontWeight: 'normal',
        color: '#14171A',
        align: 'center',
        maxWidth: 900
      }
    ]
  },

  // LINKEDIN POSTS
  {
    id: 'linkedin-insight-1',
    name: 'Business Insight',
    platform: 'linkedin-post',
    thumbnail: '',
    category: 'business',
    background: {
      type: 'gradient',
      value: { start: '#0077B5', end: '#00A0DC', direction: '135deg' }
    },
    elements: [
      {
        id: 'text-1',
        type: 'text',
        content: 'INSIGHT',
        x: 600,
        y: 220,
        fontSize: 64,
        fontFamily: 'Arial',
        fontWeight: 'bold',
        color: '#FFFFFF',
        align: 'center'
      },
      {
        id: 'text-2',
        type: 'text',
        content: 'Your professional insight or thought leadership content',
        x: 600,
        y: 380,
        fontSize: 40,
        fontFamily: 'Arial',
        fontWeight: 'normal',
        color: '#FFFFFF',
        align: 'center',
        maxWidth: 1000
      }
    ]
  },

  // YOUTUBE THUMBNAILS
  {
    id: 'youtube-gaming-1',
    name: 'Gaming Thumbnail',
    platform: 'youtube-thumbnail',
    thumbnail: '',
    category: 'personal',
    background: {
      type: 'gradient',
      value: { start: '#FF0000', end: '#CC0000', direction: '135deg' }
    },
    elements: [
      {
        id: 'text-1',
        type: 'text',
        content: 'VIDEO TITLE',
        x: 640,
        y: 260,
        fontSize: 96,
        fontFamily: 'Arial',
        fontWeight: '900',
        color: '#FFFFFF',
        align: 'center'
      },
      {
        id: 'shape-1',
        type: 'rectangle',
        x: 900,
        y: 450,
        width: 280,
        height: 140,
        fill: '#FFD700',
        opacity: 1
      },
      {
        id: 'text-2',
        type: 'text',
        content: 'NEW!',
        x: 1040,
        y: 520,
        fontSize: 64,
        fontFamily: 'Arial',
        fontWeight: 'bold',
        color: '#FF0000',
        align: 'center'
      }
    ]
  },

  // PINTEREST PINS
  {
    id: 'pinterest-recipe-1',
    name: 'Recipe Pin',
    platform: 'pinterest-pin',
    thumbnail: '',
    category: 'personal',
    background: {
      type: 'color',
      value: '#E60023'
    },
    elements: [
      {
        id: 'shape-1',
        type: 'rectangle',
        x: 100,
        y: 400,
        width: 800,
        height: 700,
        fill: '#FFFFFF',
        opacity: 0.95
      },
      {
        id: 'text-1',
        type: 'text',
        content: 'RECIPE NAME',
        x: 500,
        y: 550,
        fontSize: 56,
        fontFamily: 'Arial',
        fontWeight: 'bold',
        color: '#E60023',
        align: 'center',
        maxWidth: 700
      },
      {
        id: 'text-2',
        type: 'text',
        content: 'Quick & Easy • 30 Minutes',
        x: 500,
        y: 680,
        fontSize: 36,
        fontFamily: 'Arial',
        fontWeight: 'normal',
        color: '#333333',
        align: 'center'
      },
      {
        id: 'text-3',
        type: 'text',
        content: 'Save for Later →',
        x: 500,
        y: 950,
        fontSize: 32,
        fontFamily: 'Arial',
        fontWeight: '600',
        color: '#E60023',
        align: 'center'
      }
    ]
  },

  // BLANK TEMPLATES
  {
    id: 'blank-insta',
    name: 'Blank Canvas',
    platform: 'instagram-post',
    thumbnail: '',
    category: 'business',
    background: {
      type: 'color',
      value: '#FFFFFF'
    },
    elements: []
  },

  {
    id: 'blank-story',
    name: 'Blank Story',
    platform: 'instagram-story',
    thumbnail: '',
    category: 'personal',
    background: {
      type: 'color',
      value: '#FFFFFF'
    },
    elements: []
  },

  {
    id: 'blank-facebook',
    name: 'Blank Facebook Post',
    platform: 'facebook-post',
    thumbnail: '',
    category: 'business',
    background: {
      type: 'color',
      value: '#FFFFFF'
    },
    elements: []
  },

  {
    id: 'blank-linkedin',
    name: 'Blank LinkedIn Post',
    platform: 'linkedin-post',
    thumbnail: '',
    category: 'business',
    background: {
      type: 'color',
      value: '#FFFFFF'
    },
    elements: []
  },

  {
    id: 'blank-youtube',
    name: 'Blank YouTube Thumbnail',
    platform: 'youtube-thumbnail',
    thumbnail: '',
    category: 'personal',
    background: {
      type: 'color',
      value: '#FFFFFF'
    },
    elements: []
  }
]

// Helper function to get templates by platform
export function getTemplatesByPlatform(platform: string) {
  return TEMPLATE_LIBRARY.filter(t => t.platform === platform)
}

// Helper function to get templates by category
export function getTemplatesByCategory(category: string) {
  return TEMPLATE_LIBRARY.filter(t => t.category === category)
}
