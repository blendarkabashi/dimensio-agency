import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'

function Section({ title, image, children }) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="Discovery & Strategy Phase" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">

<p>This is the initial and crucial phase where we engage with you to dive deep into your vision, objectives, and requirements. </p>

<p>
We conduct thorough research to understand your market position, audience, and competition. Together, we outline the project scope, establish strategic goals, and create a roadmap that will guide the subsequent phases.
</p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">






        <TagListItem>Comprehensive client interviews</TagListItem>
        <TagListItem>Market research and analysis</TagListItem>
        <TagListItem>Competitive landscape assessment</TagListItem>
        <TagListItem>Strategic goal setting</TagListItem>
      </TagList>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Design & Development Phase" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
<p>Armed with insights from the Discovery phase, our team crafts a custom design that aligns with your brand identity and user expectations.</p>

<p> Post design approval, our developers bring the design to life using the latest web technologies. This phase is iterative and collaborative, with regular check-ins for your feedback to ensure alignment with the project goals.</p>
      </div>

      <Blockquote
        author={{ name: 'Jordan Marsch', role: 'Chief Product Officer' }}
        className="mt-12"
      >
Dimensio's precision and attention to detail made us feel intimately involved in every pixel and code line crafted!
      </Blockquote>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Testing & Launch Phase" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
<p>Before any site goes live, it undergoes rigorous testing to ensure functionality across all browsers and devices. We iron out any issues to guarantee a seamless user experience. </p>

<p>Once quality is assured, we proceed to launch, ensuring a smooth transition with minimal downtime. Post-launch, we remain on standby to handle any immediate post-deployment concerns.</p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List className="mt-8">
        <ListItem title="Quality Assurance">
          We implement comprehensive testing methods to ensure your platform is as flawless and reliable as possible.
        </ListItem>
        <ListItem title="Premium Hosting Solutions">
          We provide top-of-the-line server environments to ensure your website's performance is swift and stable around the clock.
        </ListItem>
        <ListItem title="Ongoing Support">
          With our commitment to your long-term success, we offer enduring support and maintenance to keep your operations running smoothly.
        </ListItem>
      </List>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Our values"
        title="Fostering Excellence and Innovation"
      >
        <p>
          At Dimensio, we prioritize innovative web solutions built on a foundation of reliability, ensuring every project meets the highest standards of excellence.
        </p>
      </SectionIntro>



      <Container className="mt-24">
        <GridList>
          <GridListItem title="Commitment to Excellence">
            We are dedicated to delivering only the highest quality in web development, ensuring that every project meets rigorous standards and exceeds client expectations.
          </GridListItem>
          <GridListItem title="Client-Centric Approach">
            Our clients are at the heart of everything we do. We listen, adapt, and tailor our solutions to meet the unique demands of your business, ensuring a personalized and effective outcome.
          </GridListItem>
          <GridListItem title="Integrity and Transparency">
            Honesty is our policy. We communicate openly with our clients, providing clear timelines and full visibility into our processes, so you're informed at every step.
          </GridListItem>
          <GridListItem title="Innovation and Growth">
            Technology never stands still, and neither do we. We're constantly exploring, learning, and integrating cutting-edge technologies to keep our clients ahead of the curve.
          </GridListItem>
          <GridListItem title="Partnership and Collaboration">
            We believe in building strong, enduring partnerships with our clients. Your success is our success, and we work alongside you to ensure your web presence is powerful and effective.
          </GridListItem>
          <GridListItem title="Efficiency and Agility">
            Time is valuable, and we strive to deliver swift and agile solutions without compromising on the meticulous attention to detail that sets us apart.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata = {
  title: 'Our Process',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Our process" title="How we work">
        <p>
At Dimensio Agency, we begin by understanding your digital goals, then rapidly move into the design and development phase to bring your web vision to life with efficiency and precision.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>

      <Values />

      <ContactSection />
    </>
  )
}
