const isProduction = process.env.NODE_ENV === "production";

export const heroDetails = {
    heading: 'Know if your email was in a data breach — in seconds',
    subheading: 'No signups. No tech skills needed. Just clarity and peace of mind',
    centerImageSrc: isProduction ? "/v1/images/hero-mockup.png":'/images/hero-mockup.png',
}