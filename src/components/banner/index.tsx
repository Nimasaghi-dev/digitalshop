import * as React from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Card,
  CardContent,
} from '@/components/ui';

import IMG1 from './image/1-daniel-korpai-KPCPE_sNBdQ-unsplash.jpg';
import IMG2 from './image/2-carl-heyerdahl-KE0nC8-58MQ-unsplash.jpg';
import IMG3 from './image/3-dennis-brendel-gQ6NlDvRngU-unsplash.jpg';
import IMG4 from './image/4-ab-wgslH4XlNCc-unsplash.jpg';
import Image from 'next/image';

function Banner() {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {[IMG1, IMG2, IMG3, IMG4].map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="relative aspect-square h-[400px] w-full flex items-center justify-center p-6">
                  <Image
                    src={image}
                    alt="banner"
                    fill
                    className="object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default Banner;
