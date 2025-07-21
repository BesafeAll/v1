import { 
    // FiBarChart2, 
    FiBell, 
    FiBookOpen, 
    // FiBriefcase, 
    // FiDollarSign, 
    FiGift, 
    FiLayout, 
    // FiLock, 
    // FiPieChart, 
    FiRefreshCcw, 
    FiShield, 
    // FiTarget, 
    // FiTrendingUp, 
    FiUnlock, 
    // FiUser, 
    FiUserX, 
    FiWifiOff } from "react-icons/fi";

import { IBenefit } from "@/types"
const isProduction = process.env.NODE_ENV === "production";
export const benefits: IBenefit[] = [
    {
      title: "Email Breach Detection",
      description:
        "We scan your email against known data leaks and alert you instantly if it's ever found — so you can take action quickly.",
      bullets: [
        {
          title: "Daily Auto Scans",
          description:
            "Your saved email is checked daily against fresh breach dumps. No manual effort needed.",
          icon: <FiRefreshCcw size={26} />,
        },
        {
          title: "Historical Breach History",
          description:
            "Get a full list of past breaches where your email was exposed — including what data was leaked.",
          icon: <FiBookOpen size={26} />,
        },
        {
          title: "Breach Alert Notifications",
          description:
            "Push notifications when new breaches affect your email — so you can update passwords or take precautions.",
          icon: <FiBell size={26} />,
        },
      ],
      imageSrc: isProduction ? "/v1/images/mockup-2.png" : "/images/mockup-2.png",
    },
    {
      title: "Simple, Private, Offline",
      description:
        "Your email data never leaves your phone. All breach scans happen through public APIs with no tracking or data collection.",
      bullets: [
        {
          title: "No Sign Up Required",
          description:
            "You can start using the app instantly — just enter your email to begin scanning.",
          icon: <FiUserX size={26} />,
        },
        {
          title: "Lightweight & Offline-Friendly",
          description:
            "The app is small in size, works offline for saved data, and only connects during scans.",
          icon: <FiWifiOff size={26} />,
        },
        {
          title: "Local-Only Storage",
          description:
            "Your scanned results and saved emails are stored securely on your own device using encrypted local storage.",
          icon: <FiShield size={26} />,
        },
      ],
      imageSrc: isProduction ? "/v1/images/mockup-1.png" : "/images/mockup-1.png",
    },
    {
      title: "Made for Everyone",
      description:
        "We designed the app for people who aren't tech experts. Everything is explained clearly, and privacy comes by default.",
      bullets: [
        {
          title: "Clean, Minimal Interface",
          description:
            "No clutter, no jargon. Just scan and get results you can understand at a glance.",
          icon: <FiLayout size={26} />,
        },
        {
          title: "Works Without an Account",
          description:
            "No need to sign up or share personal info. Just use the app and check your risk.",
          icon: <FiUnlock size={26} />,
        },
        {
          title: "Completely Free (For Now)",
          description:
            "We're testing this early version with the community. It's free while we gather feedback.",
          icon: <FiGift size={26} />,
        },
      ],
      imageSrc: isProduction ? "/v1/images/mockup-3.png" : "/images/mockup-3.png",
    },
  ];
  
// export const benefits: IBenefit[] = [
//     {
//         title: "Email Breach Detection",
//         description: "We scan your email and notify you if it's ever found in a data leak — so you can stay protected without lifting a finger.",
//         bullets: [
//             {
//                 title: "Smart Link Scanner",
//                 description: "Instantly check if a link is safe before you click it. BeSafe helps you avoid scams, phishing, and fake websites.",
//                 icon: <FiBarChart2 size={26} />
//             },
//             {
//                 title: "Privacy Score Tracking",
//                 description: "See how private your browsing experience is and get simple tips to improve your privacy score.",
//                 icon: <FiTarget size={26} />
//             },
//             {
//                 title: "Leak Prediction & Alerts",
//                 description: "We monitor breaches across the web and notify you if your email or personal data might be affected in future leaks.",
//                 icon: <FiTrendingUp size={26} />
//             }
//         ],
//         imageSrc:isProduction ? "/v1/images/mockup-1.webp": "/images/mockup-1.webp"
//     },
//     {
//         title: "Seamless Investing",
//         description: "Start building wealth today, no financial degree required. Besafe makes investing accessible and straightforward.",
//         bullets: [
//             {
//                 title: "Micro-Investing",
//                 description: "Begin with as little as $1 and watch your money grow.",
//                 icon: <FiDollarSign size={26} />
//             },
//             {
//                 title: "Expert Portfolios",
//                 description: "Choose from investment strategies tailored to your risk tolerance.",
//                 icon: <FiBriefcase size={26} />
//             },
//             {
//                 title: "Real-Time Performance",
//                 description: "Track your investments with easy-to-understand metrics and visuals.",
//                 icon: <FiPieChart size={26} />
//             }
//         ],
//         imageSrc:isProduction ? "/v1/images/mockup-2.webp" : "/images/mockup-2.webp"
//     },
//     {
//         title: "Bank-Grade Security",
//         description: "Your financial data deserves the best protection. Rest easy knowing Besafe employs cutting-edge security measures.",
//         bullets: [
//             {
//                 title: "Military-Grade Encryption",
//                 description: "Your information is safeguarded with the highest level of encryption.",
//                 icon: <FiLock size={26} />
//             },
//             {
//                 title: "Biometric Authentication",
//                 description: "Access your account securely with fingerprint or facial recognition.",
//                 icon: <FiUser size={26} />
//             },
//             {
//                 title: "Real-Time Fraud Detection",
//                 description: "Our system constantly monitors for suspicious activity to keep your money safe.",
//                 icon: <FiShield size={26} />
//             }
//         ],
//         imageSrc:isProduction ? "/v1/images/mockup-1.webp" : "/images/mockup-1.webp"
//     },
// ]