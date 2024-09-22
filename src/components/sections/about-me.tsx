import Image from 'next/image';

import ProfileImage from '/public/images/profile_image.png';
import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            <Image
              src={ProfileImage}
              alt="Profile Image"
              className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
              style={{ objectFit: 'cover' }}
            ></Image>
            <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-xl flex-col gap-6">
          <Typography variant="h3">
            Curious about me? Here you have it:
          </Typography>
          <Typography>
            Welcome to my realm as a dynamic app/web developer! 🌟<br /><br />

            Embarking on my journey into app/web development in 2021 was just the beginning of an exciting adventure. Three years later, I proudly stand as a passionate App/Web Developer, specializing in React.js, React Native, and JavaScript. I am enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel-perfect design, and writing clear, readable, highly performant code matter to me.<br /><br />

            <b>React Native</b>: Proficient in building scalable and performant mobile applications using React Native, with expertise in cross-platform development for iOS and Android. 💡<br /><br />

            <b>D3.js</b>: Skilled in creating dynamic and interactive data visualizations using D3.js, with a focus on delivering insightful and visually appealing charts and graphs. 🚀<br /><br />

            <b>React.js</b>: The heart of modern web development, React.js fuels my passion for crafting intuitive user interfaces and dynamic frontend experiences. Its component-based architecture empowers me to create immersive web applications that resonate with users and elevate brands. 🔍<br /><br />

            <b>Node.js</b>: Powering my backend infrastructure, Node.js accelerates development and unlocks new possibilities. Its non-blocking I/O model and vast ecosystem enable me to build high-performance, event-driven applications that scale effortlessly. 🛠️<br /><br />

            Driven by creativity and fueled by innovation, I thrive on pushing the boundaries of what's possible in mobile app and web development. From crafting pixel-perfect designs to optimizing performance, I am dedicated to delivering exceptional results that exceed expectations and inspire action. 🎨<br /><br />

            Join me on this exhilarating journey as we unlock the full potential of mobile app and web development, one line of code at a time. 💻
          </Typography>

          <Typography>
            I am very much a progressive thinker and enjoy working on products
            end to end, from ideation all the way to development.
          </Typography>
          <Typography>Finally, some quick bits about me.</Typography>
          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">
                B.E. in Computer Science & Engineering
              </Typography>
              <Typography component="li">Mobile App Developer</Typography>
            </ul>
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">Avid learner</Typography>
              <Typography component="li">Full Stack Developer</Typography>
            </ul>
          </div>
          <Typography>
            One last thing, I&apos;m available for freelance work, so feel free
            to reach out and say hello! I promise I don&apos;t bite 😉
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
