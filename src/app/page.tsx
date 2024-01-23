import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import {
  ArrowDownToLine,
  CheckCircle,
  Leaf,
} from 'lucide-react'

export default function Home() {
  const perks = [
      {
      name: 'Instant Delivery',
      Icon: ArrowDownToLine,
      description: 'Receive your assets in seconds via email and start downloading immediately for a swift, seamless experience.',
      },
      {
      name: 'Quality Assurance',
      Icon: CheckCircle,
      description: 'Our team meticulously verifies each asset to meet the highest quality standards. Not satisfied? Enjoy a 30-day refund guarantee.',
      },
      {
      name: 'Green Initiatives',
      Icon: Leaf,
      description: "We're committed to environmental preservation. 1% of your purchase contributes to the restoration and protection of our planet.",
      }
  ]
  return (
    <>
    {/* Landing Section */}
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
       <h1 className="text-4xl font-bold tracking-tight text-gray-600 sm:text-6xl">Your MarketPlace for high quality<span className="text-violet-500"> Digital Assets</span></h1> 
          <p className="font-semibold text-lg max-w-prose text-muted-foreground mt-5">
            Welcome to Digital Dukaan – your hub for custom UI and icons. Buy and sell unique digital creations seamlessly here!
          </p>
          <div className='flex flex-col sm:flex-row gap-4 mt-6'>
            <Link href='/products' className={buttonVariants()}>
              Browse Trending
            </Link>
            <Button variant='ghost'>
              Our quality promise &rarr;
            </Button>
          </div>
      </div>
    </MaxWidthWrapper>

    <section className='border-t border-gray-200 bg-gray-50'>
        <MaxWidthWrapper className='py-20'>
          <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'>
            {perks.map((perk) => (
              <div
                key={perk.name}
                className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
                <div className='md:flex-shrink-0 flex justify-center'>
                  <div className='h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900'>
                    {<perk.Icon className='w-1/3 h-1/3' />}
                  </div>
                </div>

                <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'>
                  <h3 className='text-base font-medium text-gray-900'>
                    {perk.name}
                  </h3>
                  <p className='mt-3 text-sm text-muted-foreground'>
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
