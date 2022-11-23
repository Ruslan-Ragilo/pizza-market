import ContentLoader from 'react-content-loader'

const SceletonPizzaCard = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={457}
    viewBox="0 0 280 457"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    // {...props}
  >
    <rect x="204" y="-6" rx="3" ry="3" width="88" height="6" />
    <circle cx="127" cy="74" r="2" />
    <circle cx="131" cy="130" r="127" />
    <rect x="6" y="313" rx="0" ry="0" width="254" height="58" />
    <rect x="6" y="263" rx="0" ry="0" width="254" height="30" />
    <rect x="8" y="387" rx="0" ry="0" width="95" height="41" />
    <rect x="129" y="386" rx="0" ry="0" width="131" height="42" />
    <rect x="223" y="412" rx="0" ry="0" width="2" height="0" />
  </ContentLoader>
)

export default SceletonPizzaCard
