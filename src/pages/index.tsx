import Head from "next/head"
import Intro from "@/components/homepage/Intro"


export default function Index() {
    return (
        <>
            <Head>
                <title>UiXplore</title>
            </Head>
            <main>
                <Intro />
            </main>
        </>
    )
}