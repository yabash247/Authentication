import { P } from '../../../../AbstractElements'

const StaticBlockQuote = () => {
  return (
    <div className="figure d-block dark-blockquote text-start">
      <blockquote className="blockquote mb-2 b-l-primary bg-light-primary">
        <P className="mb-0 f-16">The only impossible journey is the one you never begin.</P>
        <span className="blockquote-footer">Tony Robbins</span>
      </blockquote>
    </div>
  )
}

export default StaticBlockQuote