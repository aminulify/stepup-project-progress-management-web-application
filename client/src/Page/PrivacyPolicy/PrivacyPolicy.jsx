import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
    return (
        <div className='max-w-[1000px] md:mx-auto mx-5 text-[var(--secondaryFontColor)] mt-24'>
            <h3 className='pt-8 md:text-3xl text-2xl font-bold text-center text-[var(--primaryFontColor)]'>Privacy Policy</h3>
            <p className='py-3'>Your privacy is extremely important to us. To better protect you, we provide this notice explaining our online information practices and the choices you can make about the way your information is collected and used.</p>
            <p>This Privacy Policy relates to information collected by Mango Technologies, Inc. DBA stepup (referred to in this Privacy Policy as "stepup" "we" or "us" or "our") through your use of our website and our Services, features, and information available on our website (which are collectively referred to in this Privacy Policy as the "stepup Service").</p>

            <h3 className='text-[var(--primaryFontColor)] font-semibold text-xl pt-6'>How will I know if there are any changes to this Privacy Policy?</h3>
            <p className='py-3'>We may revise this Privacy Policy from time to time. We will not make changes that result in significant additional uses or disclosures of your personally identifiable information without notifying you of such changes via email. We may also make non-significant changes to this Privacy Policy that generally will not significantly affect our use of your personally identifiable information, for which an email is not required. We encourage you to check this page periodically for any changes. If any non-significant changes to this Privacy Policy are unacceptable to you, you must immediately contact us and, stop using the stepup Service until the issue is resolved. Your continued use of the stepup Service following the posting of non-significant changes to this Privacy Policy constitutes your acceptance of those changes.</p>

            <h3 className='text-[var(--primaryFontColor)] font-semibold text-xl pt-3'>Whom do I Contact if I have any Privacy Questions?</h3>
            <p className='py-3'>If you have any questions or comments about this Privacy Policy or feel that we are not abiding by the terms of this Privacy Policy, please contact our Privacy Agent in any of the following ways:</p>
            <p className='pl-5 pb-8'>– By email: <Link className='text-blue-600 underline' to="aminulify.com">help@stepup.com</Link></p>
        </div>
    );
};

export default PrivacyPolicy;