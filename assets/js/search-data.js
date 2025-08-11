// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/blog/";
              },
            },{id: "dropdown-news",
              title: "news",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/news/";
              },
            },{id: "post-the-unpragmatic-programmer",
        
          title: "The Unpragmatic Programmer",
        
        description: "vibe coding, and Plato&#39;s allegory of the cave",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/death/";
          
        },
      },{id: "news-i-have-joined-the-startup-rogue-avionics-as-a-part-time-embedded-software-engineer",
          title: 'I have joined the startup Rogue Avionics as a part time embedded software...',
          description: "",
          section: "News",},{id: "news-after-one-and-a-half-years-of-work-i-have-finished-my-software-internship-at-nasa-langley-research-center-nasa-has-truly-been-a-uniquely-passionate-environment-and-a-wonder-to-work-in-being-a-part-of-its-legendary-history-has-been-a-great-honor-and-an-eye-opening-experience-that-will-shape-my-software-for-the-rest-of-my-life-thank-you-to-my-mentor-dr-snorre-stamnes",
          title: 'After one and a half years of work, I have finished my software...',
          description: "",
          section: "News",},{id: "news-i-have-joined-the-startup-brane-technologies-as-a-software-engineer-focusing-on-ai-application-and-hardware-benchmarking",
          title: 'I have joined the startup Brane Technologies as a software engineer, focusing on...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%69%61%6E%61%74%72%6F%73%68%63%68%65%6E%6B%6F@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Ian-VA", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/ian-atroshchenko", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
