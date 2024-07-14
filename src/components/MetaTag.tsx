import { Helmet } from 'react-helmet-async';

export default function MetaTag() {
    return (
        <Helmet>
            <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0" />
        </Helmet>
    )
}