import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

export default function PrivacyPolicy() {
  return (
    <PageWrapper>
      <Container>
        <Fade cascade damping={0.1} triggerOnce>
          <HeaderSection>
            <Title>Privacy Policy for Mike-Connect Media</Title>
            <LastUpdated>Effective immediately upon posting</LastUpdated>
          </HeaderSection>

          <ContentCard>
            <Section>
              <SectionHeading>Who We Are</SectionHeading>
              <Text>Welcome to Mike-Connect Blog.</Text>
              <Text>
                At Mike-Connect's Blog, which is accessible from https://www.mikeconnect.com/, one of our main priorities is the privacy of our visitors and forum members. This Privacy Policy document contains types of information that is collected and recorded by Mike-Confect’s Blog and how we use it.
              </Text>
              <Text>
                If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
              </Text>
              <Text>
                This Privacy Policy applies only to our online activities and is valid for our forum members and visitors to our website with regards to the information that they shared and/or collect in Mike-Connect's Blog. This policy is not applicable to any information collected offline or via channels other than this website.
              </Text>
            </Section>

            <Section>
              <SectionHeading>Consent</SectionHeading>
              <Text>
                By using our website (Mike-Connect via our url -https://www.mikeconnect.com), you hereby consent to our Privacy Policy and agree to its terms.
              </Text>
            </Section>

            <Section>
              <SectionHeading>Comments & Information we collect</SectionHeading>
              <Text>
                Suggested text: When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection.
              </Text>
              <Text>
                The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
              </Text>
              <Text>
                If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
              </Text>
              <Text>
                When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.
              </Text>
            </Section>

            <Section>
              <SectionHeading>How we use your information</SectionHeading>
              <Text>We use the information we collect in various ways, including to:</Text>
              <List>
                <ListItem>Provide, operate, and maintain our website</ListItem>
                <ListItem>Improve, personalize, and expand our website</ListItem>
                <ListItem>Understand and analyze how you use our website</ListItem>
                <ListItem>Develop new products, services, features, and functionality</ListItem>
                <ListItem>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</ListItem>
                <ListItem>Send you emails</ListItem>
                <ListItem>Find and prevent fraud</ListItem>
              </List>
            </Section>

            <Section>
              <SectionHeading>Log Files</SectionHeading>
              <Text>
                Mike-Connect's Blog follows a standard procedure of using log files. These files log visitors when they visit websites or Our Forum Members when they register on our forum. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for forum membership, analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.
              </Text>
            </Section>

            <Section>
              <SectionHeading>Media</SectionHeading>
              <Text>
                Suggested text: If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.
              </Text>
            </Section>

            <Section>
              <SectionHeading>Cookies and Web Beacons</SectionHeading>
              <Text>
                Like any other website, Mike-Connect's Blog uses "cookies". These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
              </Text>
            </Section>

            <Section>
              <SectionHeading>Embedded content from other websites</SectionHeading>
              <Text>
                Suggested text: Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.
              </Text>
              <Text>
                These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.
              </Text>
            </Section>

            <Section>
              <SectionHeading>Who we share your data with</SectionHeading>
              <Text>
                Suggested text: If you request a password reset, your IP address will be included in the reset email.
              </Text>
            </Section>

            <Section>
              <SectionHeading>How long we retain your data</SectionHeading>
              <Text>
                Suggested text: If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.
              </Text>
              <Text>
                For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.
              </Text>
            </Section>

            <Section>
              <SectionHeading>What rights you have over your data</SectionHeading>
              <Text>
                Suggested text: If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.
              </Text>
            </Section>

            <Section>
              <SectionHeading>Where we send your data</SectionHeading>
              <Text>
                Suggested text: Visitor comments may be checked through an automated spam detection service
              </Text>
            </Section>

            <Section>
              <SectionHeading>Changes to This Privacy Policy</SectionHeading>
              <Text>
                We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately, after they are posted on this page.
              </Text>
            </Section>

            <Section>
              <SectionHeading>Contact Us</SectionHeading>
              <Text>
                If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.
              </Text>
            </Section>
          </ContentCard>
        </Fade>
      </Container>
    </PageWrapper>
  );
}

/* ===================== STYLES ===================== */

const PageWrapper = styled.div`
  background-color: #f8f9fa;
  min-height: 100vh;
  padding: 80px 20px;

  @media (max-width: 768px) {
    padding: 40px 15px;
  }
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 50px;
`;

const Title = styled.h1`
  font-size: 42px;
  font-weight: 800;
  margin-bottom: 15px;
  background: linear-gradient(90deg, #ff6b81, #ffb347);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const LastUpdated = styled.p`
  font-size: 14px;
  color: #888;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const ContentCard = styled.div`
  background: white;
  padding: 60px;
  border-radius: 24px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
  line-height: 1.8;

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const Section = styled.section`
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionHeading = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #333;
  margin-bottom: 15px;
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 40px;
    height: 3px;
    background: #ffb347;
    border-radius: 2px;
  }
`;

const Text = styled.p`
  font-size: 16px;
  color: #555;
  margin-bottom: 20px;
`;

const List = styled.ul`
  margin-left: 20px;
  margin-bottom: 20px;
`;

const ListItem = styled.li`
  color: #555;
  margin-bottom: 10px;
  font-size: 16px;
`;