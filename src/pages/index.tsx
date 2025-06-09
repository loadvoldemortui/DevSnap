import Head from "next/head"
import Intro from "@/components/homepage/Intro"
import BoxShadow from "@/components/homepage/BoxShadow"


export default function Index() {
    return (
        <>
            <Head>
                <title>UiXplore</title>
            </Head>
            <main>
                {/* <Intro /> */}
                <BoxShadow/>
            </main>
        </>
    )
}