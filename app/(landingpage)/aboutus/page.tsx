import Image from "next/image";
import picture from "@/assets/AboutUsPage/aboutus.jpg";

const AboutUsPage = () => {
  return (
    <div className='w-full bg-offwhite'>
      <div className='lg:flex-row text-ashBlack mx-4 md:mx-12 xl:mx-36 2xl:mx-52 py-10'>
        <p className='text-5xl font-semibold pb-10'>Delicateria Manila</p>
        <div className='flex flex-col lg:flex-row gap-10 lg:gap-25 items-center'>
          <div className='w-full order-2 lg:order-1 lg:w-1/2'>
            <p className='text-lg'>
              DELICATERIA MANILA is your go-to destination for premium imported
              delicacies, thoughtfully curated for both discerning retail
              customers and top-tier wholesale clients such as hotels and
              restaurants. What sets us apart? Quality. Exclusivity.
              Authenticity.
              <br />
              <br />
              We specialize in high-quality imported goods, mostly sourced from
              Europe, including fine seafood, premium cuts of beef from the US,
              Brazil, and Australia, gourmet sausages, hams, cold cuts, and
              hard-to-find condiments and dry goods.
              <br />
              <br />
              With two accessible locations in Quezon City—Royal Place Mall, Don
              Antonio Drive, and Prosperity Building, West Avenue—we cater to
              both everyday shoppers and culinary professionals seeking the
              finest ingredients.
              <br />
              <br />
              We take pride in offering a medium to high-end product range with
              unmatched freshness and authenticity. Whether you&apos;re planning
              a special dinner at home or sourcing ingredients for a hotel
              kitchen, DELICATERIA MANILA ensures every bite is nothing short of
              exceptional.
              <br />
              <br />
              Open daily from 11:00 AM to 8:00 PM, we offer free delivery within
              Quezon City and convenient store pickup options.
            </p>
          </div>
          <div className='w-full order-1 lg:order-2 lg:w-1/2 relative aspect-[4/3]'>
            <Image
              src={picture}
              alt='Delicateria Manila'
              fill
              className='object-cover'
              sizes='(max-width: 1024px) 100vw, 50vw'
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
