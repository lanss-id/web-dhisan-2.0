export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      consult: {
        Row: {
          created_at: string
          email: string | null
          id: number
          message: string | null
          name: string | null
          whatsapp: number | null
        }
        Insert: {
          created_at?: string
          email?: string | null
          id?: number
          message?: string | null
          name?: string | null
          whatsapp?: number | null
        }
        Update: {
          created_at?: string
          email?: string | null
          id?: number
          message?: string | null
          name?: string | null
          whatsapp?: number | null
        }
        Relationships: []
      }
      images: {
        Row: {
          created_at: string
          id: number
          porto_id: number | null
          url_image: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          porto_id?: number | null
          url_image?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          porto_id?: number | null
          url_image?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "images_porto_id_fkey"
            columns: ["porto_id"]
            isOneToOne: false
            referencedRelation: "portofolio"
            referencedColumns: ["id"]
          }
        ]
      }
      portofolio: {
        Row: {
          created_at: string
          description: string | null
          id: number
          name: string | null
          year: number | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: number
          name?: string | null
          year?: number | null
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: number
          name?: string | null
          year?: number | null
        }
        Relationships: []
      }
      smoothies: {
        Row: {
          created_at: string
          id: number
          method: string | null
          rating: number | null
          title: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          method?: string | null
          rating?: number | null
          title?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          method?: string | null
          rating?: number | null
          title?: string | null
        }
        Relationships: []
      }
      type_service: {
        Row: {
          created_at: string
          id: number
          name: string | null
          value: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          name?: string | null
          value?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          name?: string | null
          value?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
