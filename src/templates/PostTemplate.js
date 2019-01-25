import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import 'prismjs/themes/prism-tomorrow.css';
import '@react-website-themes/default/styles/variables';
import '@react-website-themes/default/styles/global';

import { ShareButtonRectangle } from 'react-custom-share';

import Article from '@react-website-themes/default/components/Article';
import Author from '@react-website-themes/default/components/Author';
import Branding from '@react-website-themes/default/components/Branding';
import Bodytext from '@react-website-themes/default/components/Bodytext';
import Comments from '@react-website-themes/default/components/Comments';
import Footer from '@react-website-themes/default/components/Footer';
import Header from '@react-website-themes/default/components/Header';
import Heading from '@react-website-themes/default/components/Heading';
import Layout from '@react-website-themes/default/components/Layout';
import Menu from '@react-website-themes/default/components/Menu';
import Meta from '@react-website-themes/default/components/Meta';
import NextPrev from '@react-website-themes/default/components/NextPrev';
import Seo from '@react-website-themes/default/components/Seo';
import Share from '@react-website-themes/default/components/Share';

import config from '../content/meta/config';
import menuItems from '../content/meta/menu';

import CalendarIcon from 'react-feather/dist/icons/calendar';
import UserIcon from 'react-feather/dist/icons/user';
import TagIcon from 'react-feather/dist/icons/tag';
import PrevIcon from 'react-feather/dist/icons/arrow-left';
import NextIcon from 'react-feather/dist/icons/arrow-right';
import FacebookIcon from 'react-feather/dist/icons/facebook';
import TwitterIcon from 'react-feather/dist/icons/twitter';
import EmailIcon from 'react-feather/dist/icons/mail';

// for adsense
import AdSense from 'react-adsense';
// for css custom
import { injectGlobal } from 'emotion';
// for meta tags
import { Helmet } from "react-helmet"

injectGlobal`
  // for all
  .css-54iqau {
    max-width: 800px !important;
  }
  // for code block
  :not(pre) > code[class*="language-"]{
    padding: .1em .4em;
    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;
  }
  // for code block
  .gatsby-highlight {
    font-size: .9em;
  }
  .css-1t5v1by pre {
    border-radius: .3em;
  }
  // for author
  .css-1yrkae2 {
    text-align: center;
  }
`;

const metaIcons = {
  calendar: CalendarIcon,
  user: UserIcon,
  tag: TagIcon,
};

const nextPrevIcons = {
  next: NextIcon,
  prev: PrevIcon,
};

const PostTemplate = props => {
  const {
    data: {
      post: {
        excerpt,
        html: postHTML,
        frontmatter: { title, categories },
        fields: { slug, prefix },
      },
      author: { html: authorHTML },
      footerLinks: { html: footerLinksHTML },
      copyright: { html: copyrightHTML },
    },
    pageContext: { next, prev },
  } = props;

  const {
    headerTitle,
    headerSubTitle,
    siteUrl,
    siteTitle,
    siteLanguage,
    siteTitlePostfix,
  } = config;

  const url = siteUrl + slug;
  const shareBlockProps = {
    url: url,
    button: ShareButtonRectangle,
    buttons: [
      { network: 'Twitter', icon: TwitterIcon },
      { network: 'Facebook', icon: FacebookIcon },
      { network: 'Email', icon: EmailIcon },
    ],
    text: title,
    longtext: excerpt,
  };

  return (
    <Layout>
      <Header>
        <Branding title={headerTitle} subTitle={headerSubTitle} />
        <Menu items={menuItems} />
        <Helmet>
          <meta property="og:title" content={`${title}${siteTitlePostfix}`} />
          <meta property="og:description" content={excerpt} />
        </Helmet>
      </Header>
      <Article>
        <Heading title={title} />
        <Meta
          author="onoxeve"
          prefix={prefix}
          categories={categories}
          icons={metaIcons}
        />
        <Bodytext html={postHTML} />
        <AdSense.Google
          style={{ display: 'block', 'textAlign': 'center' }}
          client='ca-pub-4357144858136704'
          slot='5257523357'
          format='fluid'
        />
        <Share shareBlockProps={shareBlockProps} />
        <NextPrev next={next} prev={prev} icons={nextPrevIcons} />
        <Author html={authorHTML} />
        <Comments slug={slug} siteUrl={siteUrl} />
      </Article>
      <Footer links={footerLinksHTML} copyright={copyrightHTML} />
    </Layout>
  );
};

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
  next: PropTypes.object,
  prev: PropTypes.object,
};

export default PostTemplate;

export const query = graphql`
  query PostTemplateQuery($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fileAbsolutePath
      excerpt
      fields {
        slug
        prefix
      }
      frontmatter {
        title
        categories
      }
    }
    author: markdownRemark(
      fileAbsolutePath: { regex: "/content/parts/author/" }
    ) {
      html
    }
    footerLinks: markdownRemark(
      fileAbsolutePath: { regex: "/content/parts/footerLinks/" }
    ) {
      html
    }
    copyright: markdownRemark(
      fileAbsolutePath: { regex: "/content/parts/copyright/" }
    ) {
      html
    }
  }
`;
