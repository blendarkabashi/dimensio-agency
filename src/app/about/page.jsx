import Image from "next/image";

import { Border } from "@/components/Border";
import { ContactSection } from "@/components/ContactSection";
import { Container } from "@/components/Container";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import { GridList, GridListItem } from "@/components/GridList";
import { PageIntro } from "@/components/PageIntro";
import { PageLinks } from "@/components/PageLinks";
import { SectionIntro } from "@/components/SectionIntro";
import { StatList, StatListItem } from "@/components/StatList";
import imageAngelaFisher from "@/images/team/angela-fisher.jpg";
import imageBenjaminRussel from "@/images/team/benjamin-russel.jpg";
import imageBlakeReid from "@/images/team/blake-reid.jpg";
import imageChelseaHagon from "@/images/team/chelsea-hagon.jpg";
import blendarkabashi from '@/images/team/blendar-kabashi.jpeg'
import imageDriesVincent from "@/images/team/dries-vincent.jpg";
import imageEmmaDorsey from "@/images/team/emma-dorsey.jpg";
import albingashi from '@/images/team/albin-gashi.png'
import imageJeffreyWebb from "@/images/team/jeffrey-webb.jpg";
import imageKathrynMurphy from "@/images/team/kathryn-murphy.jpg";
import imageLeonardKrasner from "@/images/team/leonard-krasner.jpg";
import imageLeslieAlexander from "@/images/team/leslie-alexander.jpg";
import imageMichaelFoster from "@/images/team/michael-foster.jpg";
import imageWhitneyFrancis from "@/images/team/whitney-francis.jpg";
import { loadArticles } from "@/lib/mdx";

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our culture"
        title="Balance your passion with your passion for life."
        invert
      >
        <p>
          We are a group of like-minded people who share the same core values.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Collaboration" invert>
            We believe in the power of collaboration. Teamwork is at the core of
            our culture, and we actively support and uplift one another. Our
            projects are the result of collective effort, and we thrive on the
            strength of our unity.
          </GridListItem>
          <GridListItem title="Innovation" invert>
            Innovation is our constant companion. We embrace new ideas, nurture
            creativity, and challenge the status quo. Our culture encourages
            every member to be a catalyst for change, pushing the boundaries of
            whats possible.
          </GridListItem>
          <GridListItem title="Client-Centric Approach" invert>
            Our clients are at the heart of everything we do. We take pride in
            understanding their unique needs and delivering exceptional
            solutions. Our culture revolves around exceeding client expectations
            and building lasting partnerships.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
}

const team = [
  {
    title: "Team",
    people: [
      {
        name: "Blendar Kabashi",
        role: "Senior Frontend Developer",
        image: { src: blendarkabashi },
      },
      {
        name: "Drini Fejzullahu",
        role: "Senior Backend Developer",
        image: { src: imageChelseaHagon },
      },
      {
        name: "Albin Gashi",
        role: "Senior UI/UX Designer",
        image: { src: albingashi },
      },
    ],
  },
];

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <Image
                            alt=""
                            {...person.image}
                            className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  );
}

export const metadata = {
  title: "About Us",
  description:
    "We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.",
};

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2);

  return (
    <>
      <PageIntro eyebrow="About us" title="Who We Are">
        <p>
          At Dimensio, we are more than just a team of developers; we are the
          architects of your digital vision. With a passion for technology and a
          commitment to excellence, we bring your ideas to life through code,
          creativity, and collaboration.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Our team comprises talented software developers and a brilliant
            designer who adds the aesthetic touch to our creations. Together, we
            work in harmony to build innovative and user-centric solutions that
            stand out in the digital landscape.
          </p>
          <p>
            We believe in the power of innovation, and thats why we constantly
            push the boundaries of whats possible in the world of web and
            software development. Our developers are experts in their respective
            fields, ensuring that every project we undertake is optimized for
            performance and scalability.
          </p>
          <p>
            Let's Build Together Dimensio is not just a company; it's a
            partnership. Let's collaborate, innovate, and create something
            extraordinary together. Whether you have a small web project or a
            large-scale software application, we're here to turn your vision
            into a digital reality. Discover the dimensions of possibility with
            Dimensio!
          </p>
        </div>
      </PageIntro>

      <Culture />

      <Team />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From the blog"
        intro="Our team of experienced designers and developers has just one thing on their mind; working on your ideas to draw a smile on the face of your users worldwide. From conducting Brand Sprints to UX Design."
        pages={blogArticles}
      />

      <ContactSection />
    </>
  );
}
