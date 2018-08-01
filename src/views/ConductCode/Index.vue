<template>
  <div class="about">
    <ImageBlock classImage="img1" :text="text" />
    <div class="text-block">
      <div class="container">
        <div class="wrapper mt-5 mb-5">
          <div class="group">
            <h4>Google Event Community Guidelines and Anti-Harassment Policy</h4>
            <p>
              Google is dedicated to providing a harassment-free and inclusive event experience for everyone regardless of gender identity and expression, sexual orientation, disabilities, neurodiversity, physical appearance, body size, ethnicity, nationality, race, age, religion, or other protected category. We do not tolerate harassment of event participants in any form. Google takes violations of our policy seriously and will respond appropriately.
            </p>
            <p>
              All participants of Google events must abide by the following policy
            </p>
            <h5>Be excellent to each other.</h5>
            <p>
              Treat everyone with respect. Participate while acknowledging that everyone deserves to be here — and each of us has the right to enjoy our experience without fear of harassment, discrimination, or condescension, whether blatant or via micro-aggressions. Jokes shouldn’t demean others. Consider what you are saying and how it would feel if it were said to or about you.
            </p>
            <h5>Speak up if you see or hear something.</h5>
            <p>Harassment is not tolerated, and you are empowered to politely engage when you or others are disrespected. The person making you feel uncomfortable may not be aware of what they are doing, and politely bringing their behavior to their attention is encouraged.</p>
            <h5>Practice saying "Yes and" to each other.</h5>
            <p>
              It’s a theatre improv technique to build on each other’s ideas. We all benefit when we create together.
            </p>
            <h5>We have a <strong>ZERO TOLERANCE POLICY</strong> for harassment of any kind, including but not limited to:</h5>
            <ul>
              <li>Stalking/following</li>
              <li>Deliberate intimidation</li>
              <li>Harassing photography or recording</li>
              <li>Sustained disruption of talks or other events</li>
              <li>Offensive verbal comments</li>
              <li>Verbal language that reinforces social structures of domination</li>
              <li>Sexual imagery and language in public spaces</li>
              <li>Inappropriate physical contact</li>
              <li>Unwelcome sexual or physical attention</li>
            </ul>
            <h5>In relation to, but not limited to:</h5>
            <ul>
              <li>Neurodiversity</li>
              <li>Race</li>
              <li>Color</li>
              <li>National origin</li>
              <li>Gender identity</li>
              <li>Gender expression</li>
              <li> Sexual orientation</li>
              <li>Age</li>
              <li>Body size</li>
              <li>Disabilities</li>
              <li>Appearance</li>
              <li>Religion</li>
              <li>Pregnancy</li>
            </ul>
            <p>
              Participants asked to stop any harassing behavior are expected to comply immediately. Our zero tolerance policy means that we will look into and review every allegation of violation of our Event Community Guidelines and Anti-Harassment Policy and respond appropriately. We empower and encourage you to report any behavior that makes you or others feel uncomfortable by finding a Google staff member wearing a pink event t-shirt or wearing a speaker badge or by emailing gdgcloudmad@gmail.com.
            </p>
            <p>
              Any person behaving in a disorderly manner, engaging in harassing or uncomfortable behavior, or otherwise failing to comply with this policy may be removed from any Google-hosted event or refused admittance (including to future Google events) at any time in Google’s sole discretion. Individuals who are expelled from an event for a violation of this policy will not be provided with a refund.
            </p>
            <h5>ANTI-HARASSMENT POLICY</h5>
            <p>
              Google is dedicated to providing a harassment-free and inclusive conference experience for everyone regardless of gender identity and expression, sexual orientation, differing abilities, neurodiversity, physical appearance, body size, ethnicity, nationality, age, religion, or other protected category. We do not tolerate harassment of conference participants in any form. Sexual language and imagery is not appropriate for any conference venue, including talks. Google takes these violations of our policy seriously and will respond appropriately. All attendees of the event must abide by our anti-harassment policy.
            </p>
            <h5>CONDUCT POLICY</h5>
            <p>
              Google reserves the right to refuse admittance to, or remove any person from the event (including future Google events) at any time in its sole discretion. This includes but is not limited to attendees behaving in a disorderly manner or failing to comply with the terms and conditions herein.
            </p>
          </div>
        </div>
      </div>
    </div>
 </div>
</template>

<script>
import ImageBlock from '@/components/ImageBlock.vue';

export default {
  components: { ImageBlock },
  data() {
    return {
      text: {
        title: 'CloudFest Madrid 2018',
        subtitle: 'Code of Conduct',
      },
    };
  },
};
</script>
