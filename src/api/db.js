import {
  SiReact, SiFlutter, SiMongodb, SiPostgresql, SiPrisma, SiExpress,
  SiNodedotjs, SiTailwindcss, SiWebpack, SiFigma, SiFramer, SiTypescript, SiJavascript
} from 'react-icons/si';
import { TbBrandCss3, TbBrandGit, TbBrandBootstrap, TbBrandHtml5 } from 'react-icons/tb';
import { FaSass } from 'react-icons/fa';
import { IoLogoNpm } from 'react-icons/io';
import { VscGithub } from 'react-icons/vsc';
import { CgTrello } from 'react-icons/cg';
import { ImLoop2 } from 'react-icons/im';
import { SlSocialLinkedin, SlSocialGithub } from 'react-icons/sl';
import { VscMail } from 'react-icons/vsc';
import { BsTelephone } from 'react-icons/bs';
import { FiExternalLink } from 'react-icons/fi';
import { DiPhotoshop } from 'react-icons/di';
import { DiDart } from 'react-icons/di';



export const icon = [
  {
    id: 1,
    name: 'html',
    content: <span>HyperText Markup Language is the code that is used to structure a web page and its content. For example, content could be
      structured within a set of paragraphs, a list of bulleted points, or using images and data tables. As the title suggests, this article
      will give you a basic understanding of HTML and its functions.<br /><br />
      HTML is a markup language that defines the structure of your content. HTML consists of a series of elements, which you use to enclose,
      or wrap, different parts of the content to make it appear a certain way, or act a certain way. The enclosing tags can make a word or
      image hyperlink to somewhere else, can italicize words, can make the font bigger or smaller, and so on.</span>,
    iconXl: <TbBrandHtml5 size={100} />,
    iconXs: <TbBrandHtml5 size={35} />,
    link:
      <a
        href='https://developer.mozilla.org/en-US/docs/Web/HTML'
        className='flex items-center justify-center gap-2'
        target='_blanck'
        alt='HTML - mdn web docs'
      >
        <div className='hidden xl:block'>
          <TbBrandHtml5 size={35} />
        </div> read more
      </a>
  },
  {
    id: 2,
    name: 'css',
    content: <span> Cascading Style Sheets is a stylesheet language used to describe the presentation of a document written in HTML or XML
      (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech,
      or on other media.<br /><br />
      CSS is used to style and layout web pages, for example, to alter the font, color, size, and spacing of your content, split it into multiple
      columns, or add animations and other decorative features. This module provides a gentle beginning to your path towards CSS mastery with
      the basics of how it works, what the syntax looks like, and how you can start using it to add styling to HTML.</span>,
    iconXl: <TbBrandCss3 size={100} />,
    iconXs: <TbBrandCss3 size={35} />,
    link:
      <a
        href='https://developer.mozilla.org/en-US/docs/Web/CSS'
        className='flex items-center justify-center gap-2'
        target='_blanck'
        alt='CSS - MDN-web-docs'
      >
        <div className='hidden xl:block'>
          <TbBrandCss3 size={35} />
        </div>
        read more
      </a>
  },
  {
    id: 3,
    name: 'sass',
    content: <span>SASS is the most mature, stable, and powerful professional grade CSS extension language in the world.<br />
      Sass is a stylesheet language that’s compiled to CSS. It allows you to use variables, nested rules, mixins, functions, and more, all with a
      fully CSS-compatible syntax.<br />Sass helps keep large stylesheets well-organized and makes it easy to share design within and across projects.</span>,
    iconXl: <FaSass size={100} />,
    iconXs: <FaSass size={35} />,
    link:
      <a
        href='https://sass-lang.com/'
        className='flex items-center justify-center gap-2'
        target='_blanck'
        alt='SASS - Home Page'
      >
        <div className='hidden xl:block'>
          <FaSass size={35} />
        </div>
        read more
      </a>
  },
  {
    id: 4,
    name: 'javascript',
    content: <span>JavaScript is a lightweight, interpreted, object-oriented language with first-class functions, and is best known as the
      scripting language for Web pages, but it's used in many non-browser environments as well<br /><br />
      JavaScript runs on the client side of the web, which can be used to design / program how the web pages behave on the occurrence of an event.
      JavaScript is an easy to learn and also powerful scripting language, widely used for controlling web page behavior.</span>,
    iconXl: <SiJavascript size={100} />,
    iconXs: <SiJavascript size={35} />,
    link:
      <a
        href='https://www.javascript.com/'
        className='flex items-center justify-center gap-2'
        target='_blanck'
        alt='JAVASCRIPT - Home Page'
      >
        <div className='hidden xl:block'>
          <SiJavascript size={35} />
        </div>
        read more
      </a>
  },
  {
    id: 5,
    name: 'typescript',
    content: <span>TypeScript is like an extension or "superset" of JavaScript. Since JavaScript is a loosely typed language,
      TypeScript enforces the strict use of types. Thus, making it a strictly typed language.<br />TypeScript takes all the functionalities and
      structures JavaScript provides as a language, and adds a few things to that.</span>,
    iconXl: <SiTypescript size={100} />,
    iconXs: <SiTypescript size={35} />,
    link:
      <a
        href='https://www.typescriptlang.org/'
        className='flex items-center justify-center gap-2'
        target='_blanck'
        alt='TYPESCRIPT - Home Page'
      >
        <div className='hidden xl:block'>
          <SiTypescript size={35} />
        </div>
        read more
      </a>
  },
  {
    id: 6,
    name: 'dart',
    content: <span>Dart is a client-optimized language for developing fast apps on any platform. Its goal is to offer the most productive programming language 
    for multi-platform development, paired with a flexible execution runtime platform for app frameworks.
    Languages are defined by their technical envelope—the choices made during development that shape the capabilities and strengths of a language. Dart is designed 
    for a technical envelope that is particularly suited to client development, prioritizing both development (sub-second stateful hot reload) and high-quality production experiences across a wide variety of compilation targets (web, mobile, and desktop).
    Dart also forms the foundation of Flutter. Dart provides the language and runtimes that power Flutter apps, but Dart also supports many core developer tasks 
    like formatting, analyzing, and testing code.</span>,
    iconXl: <DiDart size={100} />,
    iconXs: <DiDart size={35} />,
    link:
      <a
        href='https://dart.dev/'
        className='flex items-center justify-center gap-2'
        target='_blanck'
        alt='DART - Home Page'
      >
        <div className='hidden xl:block'>
          <DiDart size={35} />
        </div>
        read more
      </a>
  },
  {
    id: 6,
    name: 'react',
    content: <span>React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is
      maintained by Meta (formerly Facebook) and a community of individual developers and companies. React can be used as a base in the development
      of single-page, mobile, or server-rendered applications with frameworks like Next.js.<br /><br /> However, React is only concerned with state
      managementmand rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well
      as certain client-side functionality</span>,
    iconXl: <SiReact size={100} />,
    iconXs: <SiReact size={35} />,
    link:
      <a
        href='https://reactjs.org/'
        className='flex items-center justify-center gap-2'
        target='_blanck'
        alt='REACT - Home Page'
      >
        <div className='hidden xl:block'>
          <SiReact size={35} />
        </div>
        read more
      </a>
  },
  {
    id: 7,
    name: 'flutter',
    content: <span>Flutter is an open source framework by Google for building beautiful, natively compiled, multi-platform applications from a single
      codebase.<br /> Flutter code compiles to ARM or Intel machine code as well as JavaScript, for fast performance on any device. Deploy to multiple
      devices from a single codebase: mobile, web, desktop, and embedded devices. Take control of your codebase with automated testing, developer tooling,
      and everything else you need to build production-quality apps.<br />Flutter is supported and used by Google, trusted by well-known brands around the
      world, and maintained by a community of global developers</span>,
    iconXl: <SiFlutter size={100} />,
    iconXs: <SiFlutter size={35} />,
    link:
      <a
        href='https://flutter.dev/'
        className='flex items-center justify-center gap-2'
        target='_blanck'
        alt='FLUTTER - Home Page'
      >
        <div className='hidden xl:block'>
          <SiFlutter size={35} />
        </div>
        read more
      </a>
  },
  {
    id: 8,
    name: 'nodejs',
    content: <span>Node js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes
      JavaScript code outside a web browser, which was designed to build scalable network applications. Node.js lets developers use JavaScript to write
      command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's
      web browser. Consequently, Node.js represents a "JavaScript everywhere" paradigm, unifying web-application development around a single programming
      language, rather than different languages for server-side and client-side scripts.<br /><br /> Node js has an event-driven architecture capable of
      asynchronous I/O. These design choices aim to optimize throughput and scalability in web applications with many input/output operations,
      as well as for real-time Web applications.</span>,
    iconXl: <SiNodedotjs size={100} />,
    iconXs: <SiNodedotjs size={35} />,
    link:
      <a
        href='https://nodejs.org/en/'
        className='flex items-center justify-center gap-2'
        target='_blanck'
        alt='NODEJS - Home Page'
      >
        <div className='hidden xl:block'>
          <SiNodedotjs size={35} />
        </div>
        read more
      </a>
  },
  {
    id: 9,
    name: 'npm',
    content: <span>NPM is the world's largest software registry. Open source developers from every continent use NPM to share and borrow packages,
      and many organizations use NPM to manage private development as well.<br />NPM consists of three distinct components: the website, the Command Line
      Interface (CLI) and the registry.<br />Use the website to discover packages, set up profiles, and manage other aspects of your npm experience. For
      example, you can set up organizations to manage access to public or private packages.<br /> The CLI runs from a terminal, and is how most
      developers interact with npm.<br /> The registry is a large public database of JavaScript software and the meta-information surrounding it.</span>,
    iconXl: <IoLogoNpm size={100} />,
    iconXs: <IoLogoNpm size={35} />,
    link:
      <a
        href='https://www.npmjs.com/'
        className='flex items-center justify-center gap-2'
        target='_blanck'
        alt='NPM - Home Page'
      >
        <div className='hidden xl:block'>
          <IoLogoNpm size={35} />
        </div>
        read more
      </a>
  },
  {
    id: 10,
    name: 'git',
    content: <span>Git is a free and open source distributed version control system designed to handle everything from small to very large projects with
      speed and efficiency.<br />It's used for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively
      developing source code during software development.<br /> Its goals include speed, data integrity, and support for distributed, non-linear workflows
      (thousands of parallel branches running on different systems).</span>,
    iconXl: <TbBrandGit size={100} />,
    iconXs: <TbBrandGit size={35} />,
    link:
      <a
        href='https://git-scm.com/'
        className='flex items-center justify-center gap-2'
        target='_blanck'
        alt='GIT - Home Page'
      >
        <div className='hidden xl:block'>
          <TbBrandGit size={35} />
        </div>
        read more
      </a>
  },
  {
    id: 11,
    name: 'webpack',
    content: <span>Webpack is a static module bundler for modern JavaScript applications.<br />It is made primarily for JavaScript, but it can transform
      front-end assets such as HTML, CSS, and images if the corresponding loaders are included. Webpack takes modules with dependencies and generates static
      assets representing those modules<br />Webpack takes the dependencies and generates a dependency graph allowing web developers to use a modular approach
      for their web application development purposes. It can be used from the command line or can be configured using a configuration file. This file defines
      rules, plugins, etc., for a project. Webpack is highly extensible via rules which allow developers to write custom tasks that they want to perform when
      bundling files together.</span>,
    iconXl: <SiWebpack size={100} />,
    iconXs: <SiWebpack size={35} />,
    link:
      <a
        href='https://webpack.js.org/'
        className='flex items-center justify-center gap-2'
        target='_blanck'
        alt='WEBPACK - Home Page'
      >
        <div className='hidden xl:block'>
          <SiWebpack size={35} />
        </div>
        read more
      </a>
  },
  {
    id: 12,
    name: 'express',
    content: <span>Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.<br />
      With a myriad of HTTP utility methods and middleware at your disposal, creating a robust API is quick and easy. Express provides a thin layer of fundamental
      web application features, without obscuring Node.js features that you know and love.</span>,
    iconXl: <SiExpress size={100} />,
    iconXs: <SiExpress size={35} />,
    link:
      <a
        href='https://expressjs.com/'
        className='flex items-center justify-center gap-2'
        target='_blanck'
        alt='EXPRESS - Home Page'
      >
        <div className='hidden xl:block'>
          <SiExpress size={35} />
        </div>
        read more
      </a>
  },
  {
    id: 13,
    name: 'prisma',
    content: <span>Prisma unlocks a new level of developer experience when working with databases thanks to its intuitive data model, automated migrations,
      type-safety & auto-completion<br />Prisma is an open-source ORM for Node. js and TypeScript. It is used as an alternative to writing plain SQL, or using
      another database access tool such as SQL query builders or ORMs.</span>,
    iconXl: <SiPrisma size={100} />,
    iconXs: <SiPrisma size={35} />,
    link:
      <a
        href='https://www.prisma.io/'
        className='flex items-center justify-center gap-2'
        target='_blanck'
        alt='PRISMA - Home Page'
      >
        <div className='hidden xl:block'>
          <SiPrisma size={35} />
        </div>
        read more
      </a>
  },
  {
    id: 14,
    name: 'mongodb',
    content: <span>MongoDB is an open source NoSQL database management program. NoSQL is used as an alternative to traditional relational databases. NoSQL
      databases are quite useful for working with large sets of distributed data. MongoDB is a tool that can manage document-oriented information, store or
      retrieve information.<br />MongoDB is ideal for cloud computing. Cloud-based storage needs to easily distribute data across multiple servers, which suits
      MongoDB's nature perfectly. You need your data fast and easily accessible. Use MongoDB when you're running performance-critical applications</span>,
    iconXl: <SiMongodb size={100} />,
    iconXs: <SiMongodb size={35} />,
    link:
      <a
        href='https://www.mongodb.com/'
        className='flex items-center justify-center gap-2'
        target='_blanck'
        alt='MONGODB - Home Page'
      >
        <div className='hidden xl:block'>
          <SiMongodb size={35} />
        </div>
        read more
      </a>
  },
  {
    id: 15,
    name: 'postgresql',
    content: <span>PostgreSQL is a powerful, open source object-relational database system that uses and extends the SQL language combined with many features
      that safely store and scale the most complicated data workloads.<br />PostgreSQL has earned a strong reputation for its proven architecture, reliability,
      data integrity, robust feature set, extensibility, and the dedication of the open source community behind the software to consistently deliver performant
      and innovative solutions. PostgreSQL runs on all major operating systems and has powerful add-ons such as the popular PostGIS geospatial database extender.<br />
      It is no surprise that PostgreSQL has become the open source relational database of choice for many people and organisations.</span>,
    iconXl: <SiPostgresql size={100} />,
    iconXs: <SiPostgresql size={35} />,
    link:
      <a
        href='https://www.postgresql.org/'
        className='flex items-center justify-center gap-2'
        target='_blanck'
        alt='POSTGRESQL - Home Page'
      >
        <div className='hidden xl:block'>
          <SiPostgresql size={35} />
        </div>
        read more
      </a>
  },
  {
    id: 16,
    name: 'tailwindcss',
    content: <span>Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the
      corresponding styles and then writing them to a static CSS file. It's fast, flexible, and reliable with zero-runtime.<br />Tailwind CSS is a utility-first
      CSS framework designed to enable users to create applications faster and easier. You can use utility classes to control the layout, color, spacing, typography,
      shadows, and more to create a completely custom component design — without leaving your HTML or writing a single line of custom CSS.</span>,
    iconXl: <SiTailwindcss size={100} />,
    iconXs: <SiTailwindcss size={35} />,
    link:
      <a
        href='https://tailwindcss.com/'
        className='flex items-center justify-center gap-2'
        target='_blanck'
        alt='TAILWINDCSS - Home Page'
      >
        <div className='hidden xl:block'>
          <SiTailwindcss size={35} />
        </div>
        read more
      </a>
  },
  {
    id: 17,
    name: 'bootstrap',
    content: <span>Bootstrap is an HTML, CSS & JS Library that focuses on simplifying the development of informative web pages.<br />The primary purpose of adding
      it to a web project is to apply Bootstrap's choices of color, size, font and layout to that project. As such, the primary factor is whether the developers in
      charge find those choices to their liking.<br />Once added to a project, Bootstrap provides basic style definitions for all HTML elements. The result is a
      uniform appearance for prose, tables and form elements across web browsers. In addition, developers can take advantage of CSS classes defined in Bootstrap to
      further customize the appearance of their contents.</span>,
    iconXl: <TbBrandBootstrap size={100} />,
    iconXs: <TbBrandBootstrap size={35} />,
    link:
      <a
        href='https://getbootstrap.com/'
        className='flex items-center justify-center gap-2'
        target='_blanck'
        alt='BOOTSTRAP - Home Page'
      >
        <div className='hidden xl:block'>
          <TbBrandBootstrap size={35} />
        </div>
        read more
      </a>
  },
  {
    id: 18,
    name: 'framer motion',
    content: <span>Framer motion is a powerful production-ready library from Framer that can create different animation styles in the DOM as elements. Framer
      Motion is an excellent alternative to making complex CSS animations.<br /> It's simple yet powerful, allowing you to express complex user interactions
      with robust, semantic markup. The core of the library is the motion component. Think of it as a plain HTML or SVG element, supercharged with animation
      capabilities. </span>,
    iconXl: <SiFramer size={100} />,
    iconXs: <SiFramer size={35} />,
    link:
      <a
        href='https://www.framer.com/motion/'
        className='flex items-center justify-center gap-2'
        target='_blanck'
        alt='FRAMER MOTION - Home Page'
      >
        <div className='hidden xl:block'>
          <SiFramer size={35} />
        </div>
        read more
      </a>
  },
  {
    id: 19,
    name: 'figma',
    content: <span>Figma is user interface design software for developing app and website interfaces. It uses vector graphics and visual editing tools to allow
      developers to build and fine-tune interfaces.<br /> It also has several collaboration features to allow several designers to work together in real-time.
      Unlike other UI design programs, such as Adobe XD, Figma is a web app, allowing anyone with an Internet browser and an account to use the tool.</span>,
    iconXl: <SiFigma size={100} />,
    iconXs: <SiFigma size={35} />,
    link:
      <a
        href='https://www.figma.com/'
        className='flex items-center justify-center gap-2'
        target='_blanck'
        alt='FIGMA - Home Page'
      >
        <div className='hidden xl:block'>
          <SiFigma size={35} />
        </div>
        read more
      </a>
  },
  {
    id: 20,
    name: 'photoshop',
    content: <span>Adobe Photoshop is software that is extensively used for raster image editing, graphic design and digital art. It makes use of layering to
      allow for depth and flexibility in the design and editing process, as wellas provide powerful editing tools, that when combined, are capable of just
      about anything.</span>,
    iconXl: <DiPhotoshop size={100} />,
    iconXs: <DiPhotoshop size={35} />,
    link:
      <a
        href='https://www.adobe.com/products/photoshop.html'
        className='flex items-center justify-center gap-2'
        target='_blanck'
        alt='ADOBE PHOTOSHOP - Home Page'
      >
        <div className='hidden xl:block'>
          <DiPhotoshop size={35} />
        </div>
        read more
      </a>
  },
  {
    id: 21,
    name: 'github',
    content: <span>GitHub is a web-based interface that uses Git, the open source version control software that lets multiple people make separate changes
      to web pages at the same time. As Carpenter notes, because it allows for real-time collaboration, GitHub encourages teams to work together to build
      and edit their site content</span>,
    iconXl: <VscGithub size={100} />,
    iconXs: <VscGithub size={35} />,
    link:
      <a
        href='https://github.com/'
        className='flex items-center justify-center gap-2'
        target='_blanck'
        alt='GITHUB - Home Page'
      >
        <div className='hidden xl:block'>
          <VscGithub size={35} />
        </div>
        read more
      </a>
  },
  {
    id: 22,
    name: 'trello',
    content: <span>Trello is a collaborative work management app designed to track team projects, highlight tasks underway, show who they are assigned to,
      and detail progress towards completion. At its core, Trello relies on the principles of Kanban project boards to visualize workflows, providing
      managers and team members with a simple overread of a project from start to finish</span>,
    iconXl: <CgTrello size={100} />,
    iconXs: <CgTrello size={35} />,
    link:
      <a
        href='https://trello.com/'
        className='flex items-center justify-center gap-2'
        target='_blanck'
        alt='TRELLO - Home Page'
      >
        <div className='hidden xl:block'>
          <CgTrello size={35} />
        </div>
        read more
      </a>
  },

  {
    id: 23,
    name: 'agile',
    content: <span>Agile is an iterative approach to project management and software development that helps teams deliver value to their customers
      faster and with fewer headaches. Instead of betting everything on a "big bang" launch, an agile team delivers work in small, but consumable,
      increments. Requirements, plans, and results are evaluated continuously so teams have a natural mechanism for responding to change quickly. </span>,
    iconXl: <ImLoop2 size={100} />,
    iconXs: <ImLoop2 size={35} />,
    link:
      <a
        href='https://www.atlassian.com/agile'
        className='flex items-center justify-center gap-2'
        target='_blanck'
        alt='AGILE METHODOLOGY - Information Page'
      >
        <div className='hidden xl:block'>
          <ImLoop2 size={35} />
        </div>
        read more
      </a>
  },
];







export const socialIcons = [
  {
    id: 1,
    name: 'github',
    icon: <SlSocialGithub size={35} />,
    link: 'https://github.com/Christian-Silvestri',
    alt: 'Christian Silvestri GitHub',
    linkDescription: <>github.com/christian-silvestri<FiExternalLink className='text-rose-500' /></>,
  },
  {
    id: 2,
    name: 'linkedin',
    icon: <SlSocialLinkedin size={35} />,
    link: 'https://www.linkedin.com/in/christian-silvestri/',
    alt: 'Christian Silvestri LinkedIn',
    linkDescription: <>linkedin.com/in/christian-silvestri<FiExternalLink className='text-rose-500' /></>
  },
  {
    id: 3,
    name: 'mail',
    icon: <VscMail size={35} />,
    link: 'mailto:christiansilvestri.live.it',
    alt: 'Send email to Christian Silvestri',
    linkDescription: <>christiansilvestri@live.it<FiExternalLink className='text-rose-500' /></>
  },
  {
    id: 4,
    name: 'phone',
    icon: <BsTelephone size={35} />,
    link: 'tel:3289539919',
    alt: 'Christian Silvestri phone number',
    linkDescription: <>+39 3289539919<FiExternalLink className='text-rose-500' /></>
  }
];
