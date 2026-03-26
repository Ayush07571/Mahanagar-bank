import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface RelatedProduct {
  name: string
  href: string
  category: string
}

interface RelatedProductsProps {
  products: RelatedProduct[]
  className?: string
}

export function RelatedProducts({ products, className = '' }: RelatedProductsProps) {
  return (
    <div className={className}>
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Related Products</h3>
      <div className="space-y-3">
        {products.map((product, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50 transition-colors">
            <h4 className="font-medium text-gray-900 mb-1">{product.name}</h4>
            <p className="text-sm text-gray-500 mb-2">{product.category}</p>
            <Button asChild variant="outline" size="sm" className="w-full">
              <Link href={product.href}>
                Learn More
              </Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}
