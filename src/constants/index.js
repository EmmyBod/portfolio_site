import {
    javascript,html,css,reactjs,tailwind,nodejs,mongodb,git,threejs,
    hf,bny,holopin,
    clg,school, torbita,
    crypto,oop,yml,crud,dwld,onetomany,
    trie,ds,cg,
    port_3d, jsp, chitchat, notes, react1, dental, market,
    be,sql, mini, snl,
  } from "../assets";

  const profiles = [
    {
      link: "https://www.upwork.com/freelancers/~01a2a841e7e1767e4e",
      icon: "https://img.icons8.com/color/344/GeeksforGeeks.png",
    },
    {
      link: "https://www.upwork.com/freelancers/~01a2a841e7e1767e4e",
      icon: "https://img.icons8.com/fluency/344/google-cloud.png",
    },
    {
      link: "https://www.upwork.com/freelancers/~01a2a841e7e1767e4e",
      icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/344/external-qwiklabs-provides-real-cloud-environments-that-help-developers-logo-color-tal-revivo.png",
    },
    {
      link: "https://www.upwork.com/freelancers/~01a2a841e7e1767e4e",
      icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/344/external-hackerrank-is-a-technology-company-that-focuses-on-competitive-programming-logo-color-tal-revivo.png",
    },
    {
      link:"https://www.upwork.com/freelancers/~01a2a841e7e1767e4e",
      icon: hf,
    },
    {
      link:"https://www.upwork.com/freelancers/~01a2a841e7e1767e4e",
      icon: holopin,
    },
  ];

  const achievements = [
    {
      title: "Mastered custom development on WordPress (PHP), Shopify (Liquid), and Webflow (No-code logic), including integration of necessary plugins and apps",
    },
    {
      title: "Led the development of complex client stores and websites across multiple CMS platforms—Shopify, WordPress, and Webflow",
    },
    {
      title: "Set up automated CI/CD workflows for Shopify themes (via GitHub Actions), containerized WordPress environments using Docker, and deployed Webflow sites.",
    },
    {
      title: "Four-time recipient of the Torbita Institute Tech Scholarship (2019–2023) for excellence in eCommerce web development.",
    },
    {
      title: "Selected among the top 100 (out of 20k students) in the Google Cloud Training Program (2021), with a focus on hosting scalable WooCommerce and Shopify apps.",
    },
   
  ]
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name:"Bootstrap",
      icon: "https://img.icons8.com/color/480/000000/bootstrap.png",
    },
    {
      name:"Google Cloud",
      icon: "https://img.icons8.com/color/480/000000/google-cloud.png",
    },
    {
      name:"C++ tool",
      icon: "https://img.icons8.com/color/480/000000/c-plus-plus-logo.png",
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name:"MySql",
      icon: "https://img.icons8.com/color/480/000000/mysql-logo.png",
    },
    
  ];

const list = [
    {
      id: "WordPress",
      title: "WordPress",
    },
    {
      id: "Webflow",
      title: "Webflow",
    },
   
    {
      id: "Shopify",
      title: "Shopify",
    },
   
    {
      id: "other",
      title: "Other",
    },
  ];

  export const javaProject = [
    {
      name: "F3 Formula",
      description:
        "Fitness-focused Webflow site built from Figma, featuring bold visuals, smooth interactions, and a clean, performance-optimized layout.",
      tags: [
        {
          name: "Finsweet attributes",
          color: "blue-text-gradient",
        },
        {
          name: "webflow CMS",
          color: "green-text-gradient",
        },
        {
          name: "fitness",
          color: "pink-text-gradient",
        },
      ],
      image: crypto,
      source_link: "https://www.f3formula.com/",
      source_code_link: "https://www.f3formula.com/",
    },
    {
      name: "Impact Accelerator",
      description:
        "Developed a modern, responsive website by converting a Figma design into Webflow. Implemented CMS Collections and Lottie animations to enhance UI/UX",
      tags: [
        {
          name: "Webflow Ecommerce",
          color: "blue-text-gradient",
        },
        {
          name: "Jetboost",
          color: "green-text-gradient",
        },
        {
          name: "Outseta",
          color: "pink-text-gradient",
        },
      ],
      image: yml,
      source_link: "https://www.impactaccelerator.io/",
      source_code_link: "https://www.impactaccelerator.io/",
    },
    {
      name: "Xio Trade",
      description:
        "Built a sleek AI voice automation site in Webflow using a Figma design, featuring smooth animations and a layout that reflects the platform’s cutting-edge innovation.",
      tags: [
        {
          name: "Trade",
          color: "blue-text-gradient",
        },
        {
          name: "LottieFiles",
          color: "green-text-gradient",
        },
        {
          name: "Webflow build",
          color: "pink-text-gradient",
        },
      ],
      image: crud,
      source_link: "https://www.xio.ai/",
      source_code_link: "https://www.xio.ai/",
    },
    {
      name: "RTM Website",
      description:
        "Designed a postpartum parent community site—created the layout in Figma and built it in Webflow with a clean, responsive design.",
      tags: [
        {
          name: "LottieFiles",
          color: "blue-text-gradient",
        },
        {
          name: "figma",
          color: "green-text-gradient",
        },
        {
          name: "Webflow CMS",
          color: "pink-text-gradient",
        },
      ],
      image: dwld,
      source_link: "https://www.runtellmom.com/",
      source_code_link: "https://www.runtellmom.com/",
    },
    {
      name: "Singles Hub",
      description:
        "Built a responsive Webflow site for a Christian singles platform in Africa by converting a Figma design and integrating Memberstack for user authentication.",
      tags: [
        {
          name: "Finsweet",
          color: "blue-text-gradient",
        },
        {
          name: "GoogleAnalytics",
          color: "green-text-gradient",
        },
        {
          name: "Memberstack",
          color: "pink-text-gradient",
        },
      ],
      image: onetomany,
      source_link: "https://www.olimsingleshub.com/",
      source_code_link: "https://www.olimsingleshub.com/",
    },
    {
      name: "Stay Vera",
      description:
        "A sleek, mobile-responsive website crafted in Webflow from a Figma design. Prioritized smooth transitions and a calm, premium aesthetic to deliver a stylish and modern stay experience for travelers.",
      tags: [
        {
          name: "Webflow CMS",
          color: "blue-text-gradient",
        },
        {
          name: "Typeform",
          color: "green-text-gradient",
        },
        {
          name: "Outseta",
          color: "pink-text-gradient",
        },
      ],
      image: oop,
      source_link: "https://www.stayvera.com/",
      source_code_link: "https://www.stayvera.com/",
    },
  ];
  
  export const cProject = [
    {
      name: "Velasca Fashion",
      description:
        "Developed a sleek and modern Shopify storefront for Velasca Fashion using the Dawn theme. Customized Liquid and JSON files for flexible layout control, aligning the design with the brand’s bold and polished identity.",
      tags: [
        {
          name: "Dawn theme",
          color: "blue-text-gradient",
        },
        {
          name: "Shopify App",
          color: "green-text-gradient",
        },
        {
          name: "Fashion",
          color: "pink-text-gradient",
        },
      ],
      image: trie,
      source_link: "https://www.velasca.com/",
      source_code_link: "https://www.velasca.com/",
    },
    {
      name: "H&S Beauty",
      description:
        "Built a bold Shopify beauty store using the Horizon theme, with custom Liquid and JSON edits for brand-aligned design and flexibility.",
      tags: [
        {
          name: "Beauty",
          color: "blue-text-gradient",
        },
        {
          name: "Shopify",
          color: "green-text-gradient",
        },
        {
          name: "Horizon theme",
          color: "pink-text-gradient",
        },
      ],
      image: ds,
      source_link: "https://www.hshairandskin.com/",
      source_code_link: "https://www.hshairandskin.com/",
    },
    {
      name: "RFE Rentals",
      description:
        "eveloped a clean, responsive Shopify rental site with custom Dawn theme edits for flexible design and smooth user experience",
      tags: [
        {
          name: "Rentals",
          color: "blue-text-gradient",
        },
        {
          name: "Dawn theme",
          color: "green-text-gradient",
        },
        {
          name: "Shopify",
          color: "pink-text-gradient",
        },
      ],
      image: cg,
      source_link: "https://rentforevent.com/la/",
      source_code_link: "https://rentforevent.com/la/",
    },
    
  ];
  
  export const webProject = [
    {
      name: "Emmy's Portfolio",
      description:
        "Created an impressive website made using WordPress with 3D graphics and animations to bring their content to life. Responsive webpage is made with user friendly interface",
      tags: [
        {
          name: "WordPress",
          color: "blue-text-gradient",
        },
        {
          name: "Elementor",
          color: "green-text-gradient",
        },
        {
          name: "figma",
          color: "pink-text-gradient",
        },
      ],
      image: port_3d,
      source_link: "https://emmybod.github.io/portfolio_site/",
      source_code_link: "https://emmybod.github.io/portfolio_site/",
    },
    {
      name: "Dental Website",
      description:
        "Redesigned a professional dental clinic website using WordPress and Elementor. Delivered a responsive, SEO-optimized 20+ page platform with booking functionality, and iframe embeds",
      tags: [
        {
          name: "Custom CSS",
          color: "blue-text-gradient",
        },
        {
          name: "Elementor",
          color: "green-text-gradient",
        },
        {
          name: "WordPress",
          color: "pink-text-gradient",
        },
      ],
      image: dental,
      source_link: "https://plainlanddental.com.au",
      source_code_link: "https://plainlanddental.com.au",
    },
    {
      name: "Multi-Vendor Marketplace",
      description:
        "Developed a fully functional multi-vendor marketplace with affiliate referral features and e-commerce capabilities. Built with WordPress and Divi page builder, supports custom vendor dashboards and 3D UI elements for an engaging UX",
      tags: [
        {
          name: "Divi",
          color: "blue-text-gradient",
        },
        {
          name: "WPForm plugin",
          color: "green-text-gradient",
        },
        {
          name: "WordPress",
          color: "pink-text-gradient",
        },
      ],
      image: market,
      source_link: "https://tradelineexpress.co",
      source_code_link: "https://tradelineexpress.co",
    },
   
    {
      name: "Catalyst AG Partners",
      description:
        "Converted a Figma design into a fully functional WordPress website using custom CSS and essential plugins to ensure responsiveness, clean layout, and optimal performance.",
      tags: [
        {
          name: "Divi",
          color: "blue-text-gradient",
        },
        {
          name: "WordPress",
          color: "green-text-gradient",
        },
        {
          name: "custom css",
          color: "pink-text-gradient",
        },
      ],
      image: jsp,
      source_link: "https://catalystagpartners.com/",
      source_code_link: "https://catalystagpartners.com/",
    },
    {
      name: "Aggressor Horns",
      description:
        "Transformed a detailed Figma design into a visually engaging and functional platform tailored to the brand’s style using Elementor Pro and essential plugins.",
      tags: [
        {
          name: "Elementor pro",
          color: "blue-text-gradient",
        },
        {
          name: "custom css",
          color: "green-text-gradient",
        },
        {
          name: "figma",
          color: "pink-text-gradient",
        },
      ],
      image: chitchat,
      source_link: "https://aggressorhorns.com/",
      source_code_link: "https://www.figma.com/design/ctVk6pM3ehWvbkfYd0J0p2/Aggressor?node-id=0-1&t=PktGBtbAgoUWY4TY-1",
    },
    {
      name: "Rizz Rentals",
      description:
        "Developed a sleek, fully responsive website for Rizz Rentals by converting Figma designs into a modern interface using Elementor page builder and CSS",
      tags: [
        {
          name: "custom CSS",
          color: "blue-text-gradient",
        },
        {
          name: "RankMath",
          color: "green-text-gradient",
        },
        {
          name: "WordPress",
          color: "pink-text-gradient",
        },
      ],
      image: notes,
      source_link: "https://rizzrentals.com/",
      source_code_link: "https://rizzrentals.com/",
    },
  ];
  
  export const otherProject = [
    { 
      name: "MVV Watches",
      description:
        "Designed in AdobeXD and developed using Wix, this fashion-brand website showcases MVV Watches with a sleek, responsive layout that highlights the brand’s bold identity and modern aesthetic.",
      tags: [
        {
          name: "Wix",
          color: "blue-text-gradient",
        },
        {
          name: "Fashion",
          color: "green-text-gradient",
        },
        {
          name: "SEO",
          color: "pink-text-gradient",
        },
      ],
      image: be,
      source_link: "https://www.mvvwatches.com/",
      source_code_link: "https://www.mvvwatches.com/",
    },

    {
      name: "Dreamers Logistics",
      description:
        "A bold, transport-focused website designed in Figma and built on Squarespace, integrating plugins like WPForms and Elementor for enhanced flexibility and user experience.",
      tags: [
        {
          name: "transport",
          color: "blue-text-gradient",
        },
        {
          name: "Squarespace",
          color: "green-text-gradient",
        },
        {
          name: "SEO",
          color: "pink-text-gradient",
        },
      ],
      image: sql,
      source_link: "https://www.dreamersmoving.com/",
      source_code_link: "https://www.dreamersmoving.com/",
    },
    {
      name: "Safehands Medicals",
      description:
        "Built with WordPress using Elementor and WPForms, this responsive medical website reflects a clean, professional healthcare brand with user-friendly design.",
      tags: [
        {
          name: "Health",
          color: "blue-text-gradient",
        },
        {
          name: "WordPress",
          color: "green-text-gradient",
        },
        {
          name: "Elementor",
          color: "pink-text-gradient",
        },
      ],
      image: mini,
      source_link: "https://safehandshhc.com/",
      source_code_link: "https://safehandshhc.com/",
    },
   
    
  ];
  
  const experiences = [
    {
      title: "Webflow Developer",
      company_name: "OMTech Technologies",
      icon: bny,
      iconBg: "#383E56",
      date: "November 2024 - Present",
      link: "",
      points: [
        "I specialized in converting Figma or Adobe XD designs into fully functional Webflow projects, ensuring clean HTML, CMS integration, or responsive email templates as needed.",
        "Every Webflow site I built was crafted with Webflow's Designer and CMS, optimized for all breakpoints, and delivered with speed and precision.",
        "Ensure pixel-perfect layouts using Webflow’s visual canvas, implement responsive design across all devices, and leverage Webflow's built-in performance tools for fast-loading experiences.",
      ],
        link: "https://omtechmasters.co.uk/",
    },
    {
      title: "Senior WordPress developer",
      company_name: "Deutrix Tech ",
      icon: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/null/external-national-security-agency-crowdfunding-flaticons-lineal-color-flat-icons-2.png",
      iconBg: "#383E56",
      date: "April 2019 - March 2020 ",
      link: "",
      points: [
       
        "Lead all WordPress web development projects and create eCommerce website execution.",
        "Designing website front End prototypes using Adobe XD or Figma.",
        "Developing the website using ELEMENTOR PRO, or another site builder such as Divi",
        
      ],
      link: "https://deutrix.com/",
    },
    {
      title: "Junior Shopify Developer",
      company_name: "Zenbit Tech (INTERN)",
      icon: "https://img.icons8.com/color/344/GeeksforGeeks.png",
      iconBg: "#E6DEDD",
      date: "April 2018 - February 2019",
      link: "",
      points: [
        "I helped clients convert designs into high-quality Shopify themes, Shopify custom stores, or Shopify email templates.",
        "All Shopify stores I built are fully responsive, optimized for conversions, and delivered promptly with clean Liquid code.",
        "Pixel-perfect design, mobile-friendly interfaces, and fast-loading pages for an excellent user experience.",
      ],
      link: "https://zenbit.tech/",
    },
    {
      title: "Website Speed Optimization ",
      company_name: "Google Cloud",
      icon: "https://img.icons8.com/fluency/344/google-cloud.png",
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Apr 2021",
      link: "",
      points: [
        "Through intensive testing, I identify and resolve all sources of slowness and optimize key web vital scores. ",
        "Collaborating with cross-functional technologies.",
        " On both mobile and desktop devices, I strive to have your site loaded quickly under 2 seconds.",
        "Additional self-paced labs were provided to practice on Qwiklabs a platform by Google",
      ],
      link: "https://www.upwork.com/freelancers/~01a2a841e7e1767e4e",
    },
   
  ];
  
  const educations = [
    {
      degree: "Bachelor of Computer Science",
      branch:
        "Computer Science",
      marks:
        "GPA : 4.26 / 5",
      name: "Stanford University",
      year: "(2012 - 2016)",
      image: clg,
    },
    {
      degree:
        "Master of Computer Science (MSCS)",
      branch : "Software Engineering",
      marks:
        "GPA : 4.57",
      name: "Harvard University",
      year: "2017 - 2019",
      image: school,
    },
    {
      degree:
        "Frontend Developer",
      branch: "Frontend Development",
      marks:
        "Percentage : 80 %",
      name: "Torbita Computer Institute",
      year: "2020",
      image: torbita,
    },
  ];
  
  export { list, profiles, technologies, experiences, educations, achievements };
