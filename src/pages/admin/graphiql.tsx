import {GraphiQL} from 'graphiql';
import 'graphiql/graphiql.css';
import dynamic from "next/dynamic";
import {createGraphiQLFetcher} from "@graphiql/toolkit";


const GraphiQLPage = () => {
    const fetcher = createGraphiQLFetcher({
        url: "http://localhost/v1/graphql"
    });
    
    return <GraphiQL fetcher={fetcher}/>;
}

export default dynamic(
    () => Promise.resolve(GraphiQLPage),
    {ssr: false}
);