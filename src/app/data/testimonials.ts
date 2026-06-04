export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company?: string;
}

// Fill with LinkedIn recommendations — leave empty to hide the section.
export const testimonials: Testimonial[] = [];
