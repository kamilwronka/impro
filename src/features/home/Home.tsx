import SocialLink from "@/features/home/components/SocialLink";
import ClosestEvent from "@/features/home/components/ClosestEvent";
import SectionContainer from "@/features/home/components/SectionContainer";
import { SOCIAL_LINK } from "@/features/home/config";
import Image from "next/image";
import {
  BsMessenger,
  BsFillCalendar2DateFill,
  BsFacebook,
  BsInstagram,
} from "react-icons/bs";

const Home: React.FC = () => {
  return (
    <main className="w-screen h-screen bg-gradient-to-tr from-olive-50 to-olive-500 flex align-middle justify-center">
      <div className="flex flex-col items-center w-full max-w-sm">
        <Image
          src="/chono.png"
          alt="chono impro"
          width={100}
          height={100}
          className="rounded-full mt-8"
        />
        <h1 className="text-white font-bold mt-4 text-3xl">CHONO IMPRO</h1>
        <p className="text-white mt-4">Bądź z nami na bieżąco!</p>
        <div className="flex flex-col gap-4 w-full mt-8">
          <SectionContainer>
            <SocialLink
              label="Messenger"
              icon={<BsMessenger />}
              href={SOCIAL_LINK.MESSENGER}
            />
          </SectionContainer>
          <SectionContainer>
            <ClosestEvent />
          </SectionContainer>
          <SectionContainer>
            <SocialLink
              label="REPERTUAR NA 2023"
              icon={<BsFillCalendar2DateFill />}
              href={SOCIAL_LINK.REPERTOIRE}
            />
          </SectionContainer>
          <SectionContainer>
            <SocialLink
              label="NASZ FACEBOOK"
              icon={<BsFacebook />}
              href={SOCIAL_LINK.FACEBOOK}
            />
          </SectionContainer>
          <SectionContainer>
            <SocialLink
              label="NASZ INSTAGRAM"
              icon={<BsInstagram />}
              href={SOCIAL_LINK.INSTAGRAM}
            />
          </SectionContainer>
        </div>
        <div className="mt-16 flex flex-row gap-x-24 text-white text-3xl">
          <a href={SOCIAL_LINK.FACEBOOK}>
            <BsFacebook />
          </a>
          <a href={SOCIAL_LINK.INSTAGRAM}>
            <BsInstagram />
          </a>
        </div>
      </div>
    </main>
  );
};

export default Home;
