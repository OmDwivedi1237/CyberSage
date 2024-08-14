import React from 'react';
import { TracingBeam } from '@/components/tracing-beam';
const WhyOAuth: React.FC = () => {
  const content = `
    <h1 class="text-4xl font-extrabold mb-8 text-white text-center">Why OAuth?</h1>
    
    <h2 class="text-3xl font-semibold mb-6 text-white">Why Signing in with Google or Github Might Be More Secure</h2>
    <p class="mb-6 text-white">
      As an owner of the platform, let me try to outline some insights related to both security and convenience in using services like Google or Github for signing in. In this way, although having considerable advantages, comes along with its own set of considerations.
    </p>
    <p class="mb-6 text-white">
      In most cases, a single sign-on service such as Google or Github tends to boost the level of security in a way that may prove elusive for some old email and password logins. Here's why: Once you log in using such services, you generally don't have to type your password every time for each visited site. This hugely reduces their risks of keystroke sniffing or man-in-the-middle attacks on their part. In case your Google and Github accounts are very secure—having strong passwords and multi-factor authentication—then signing in with these services can be pretty robust for methods of creating an account and logging in.
    </p>
    <p class="mb-6 text-white">
      Most importantly, these services provide the additional benefit of being able to handle all of your access permissions from one central location. If you need to deny access to a specific site or application, you can do this within your Google or Github account settings. This comes in very handy in the situation where a site you have used has a security breach—you do not have to log in to a compromised site just to secure your account. You can remove access through your main account.
    </p>
    <p class="mb-6 text-white">
      <strong class="text-white">Other Safeguards:</strong> To provide maximum protection for a Single Sign-On service, be sure to have both a unique and very strong password for both your Google and Github accounts, with MFA enabled. Take some time to scroll down the list of connected apps and delete apps you no longer use or are suspicious about.
    </p>
    
    <h2 class="text-3xl font-semibold mb-6 text-white">Caveats to Consider</h2>
    <p class="mb-6 text-white">
      Convenience often comes with caveats in many ways. The most prominent one is the exchange of personal data between the sign-in service and third-party sites. Every time you log into some new site using Google or Github, that site can receive some data about you from these services. The more personal information shared, the greater the chances of your data being misused.
    </p>
    <p class="mb-6 text-white">
      Risk is not always about brute force attacks or hacking attempts; it's often social engineering and tricking you into revealing personal information. So, since much of your data is shared and traded across the internet—very often by your consent, buried in some long, else unimportant terms of service or privacy policies—this can be used to compromise your accounts through highly targeted social engineering attacks.
    </p>
    <p class="mb-6 text-white">
      <strong class="text-white">Best Practices for Privacy:</strong> The best way to reduce privacy risks here is to be very selective about services used for single sign-on. Check the permissions that each app or site requests and allow only access that is required for the app's functionality. You might even want to use a different email address with services where you don't have confidence in them.
    </p>
    <h2 class="text-3xl font-semibold mb-6 text-white">For the Average User</h2>
    <p class="mb-6 text-white">
      That means if you're someone not so focused on advanced security practices—likely, you could be reusing passwords or not using a password manager at all—then probably you aren't that concerned about personal security either. In this case, if you log in with Google or Github, you will improve your security significantly by reducing the total number of credentials in use. In so doing, you are potentially exposing yourself less to attacks, though it will come at a slight cost in privacy.
    </p>
    <p class="mb-6 text-white">
      <strong class="text-white">More Secure for the Everyday User:</strong> If you're not using any advanced security features, implementing SSO can be a humongous improvement over traditional methods. Make sure to enable MFA on your accounts and be very wary of third-party app permissions.
    </p>
    <p class="text-white">
      Ultimately, whether it is between single sign-on services or traditional logins, you have an option depending on what has been your personal priority: convenience and security versus privacy and sharing of data.
    </p>
  `;

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-zinc-950">
      <TracingBeam className="py-8">
        <article className="mx-auto max-w-3xl text-white space-y-6">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </article>
      </TracingBeam>
    </div>
  );
};

export default WhyOAuth;
