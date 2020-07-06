import React from "react"
import Header from "../components/header"

export default function About() {
  return (
    <div style={{ color: `teal` }}>
      <Header headerText="About Gatsby" />
      <Header headerText="Ok, it's pretty cool, as you say." />
      <Header headerText="Morton! " headerSubText="Your Are Experimenting again" />
      <p>Such wow. Very React.</p>
      <p>Instead of using ResilioSync, use github clone to recreate this tutorial on a different computer. (I'm writing from a Windows 10 PC). Use <code>git clone</code> with the link which you find on the github page for that project.</p>
    </div>
  )
}