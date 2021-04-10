import tw from "tailwind.macro"
import styled from "@emotion/styled"

export const Article = styled.article`
  ${tw`max-w-full m-auto`}

  .article {
    ${tw`px-2`}
  }
`

export const Title = styled.div`
  ${tw`text-4xl hover:text-blue-400`}
  transition: all .5s;
`

export const HeroContainer = styled.div`
  ${tw`bg-blue-900`}
`

export const Meta = styled.div`
  ${tw`relative flex items-baseline justify-between p-0`}
  top: -40px;
`
export const ArticleText = styled.div`
  ${tw`max-w-3xl mx-auto my-3 font-sans text-xl font-normal text-white`}
  -webkit-hyphens: auto;
  -moz-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;

  a {
    color: #fff !important; 
  }

  p {
    ${tw`max-w-2xl mx-auto`}
  }
  ul {
    ${tw`max-w-3xl mx-auto`}
  }
`

export const Tags = styled.div`
  ${tw`mt-0`}

  a {
    ${tw`text-blue-600`}
  }
`
