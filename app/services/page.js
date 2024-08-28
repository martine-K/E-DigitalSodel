import React from 'react'
import NavLayout from '../components/NavLayout'; 

function Page() {
  return (
    <NavLayout>
      <section className='flex flex-col mt-5 px-5 py-3 w-full h-auto'>
        <div className=''>
          <form>
            <div className='mb-4 mt-7'>
              <h1 className='font-bold'>Answer the below questions (Multi-choices)</h1>

            </div>
            <div className='mb-4'>
              <label className='font-semibold'>1. What is the main purpose of a firewall?</label>
              <div>
                <input type='checkbox' id='q1a' name='q1' value='A' />
                <label htmlFor='q1a'>A. To prevent unauthorized access to or from a private network</label>
              </div>
              <div>
                <input type='checkbox' id='q1b' name='q1' value='B' />
                <label htmlFor='q1b'>B. To detect and remove malware</label>
              </div>
              <div>
                <input type='checkbox' id='q1c' name='q1' value='C' />
                <label htmlFor='q1c'>C. To encrypt data</label>
              </div>
              <div>
                <input type='checkbox' id='q1d' name='q1' value='D' />
                <label htmlFor='q1d'>D. To store backup data</label>
              </div>
            </div>

            {/* Question 2 */}
            <div className='mb-4'>
              <label className='font-semibold'>2. Which of the following is an example of a phishing attack?</label>
              <div>
                <input type='checkbox' id='q2a' name='q2' value='A' />
                <label htmlFor='q2a'>A. A fake email that appears to be from a legitimate source</label>
              </div>
              <div>
                <input type='checkbox' id='q2b' name='q2' value='B' />
                <label htmlFor='q2b'>B. Installing a firewall on your network</label>
              </div>
              <div>
                <input type='checkbox' id='q2c' name='q2' value='C' />
                <label htmlFor='q2c'>C. Using a VPN to encrypt data</label>
              </div>
              <div>
                <input type='checkbox' id='q2d' name='q2' value='D' />
                <label htmlFor='q2d'>D. Updating antivirus software</label>
              </div>
            </div>

            {/* Question 3 */}
            <div className='mb-4'>
              <label className='font-semibold'>3. What does the term "ransomware" refer to?</label>
              <div>
                <input type='checkbox' id='q3a' name='q3' value='A' />
                <label htmlFor='q3a'>A. A type of malware that locks or encrypts files until a ransom is paid</label>
              </div>
              <div>
                <input type='checkbox' id='q3b' name='q3' value='B' />
                <label htmlFor='q3b'>B. A security protocol for secure data transmission</label>
              </div>
              <div>
                <input type='checkbox' id='q3c' name='q3' value='C' />
                <label htmlFor='q3c'>C. A method of data backup</label>
              </div>
              <div>
                <input type='checkbox' id='q3d' name='q3' value='D' />
                <label htmlFor='q3d'>D. A phishing technique</label>
              </div>
            </div>

            {/* Question 4 */}
            <div className='mb-4'>
              <label className='font-semibold'>4. What is a DDoS attack?</label>
              <div>
                <input type='checkbox' id='q4a' name='q4' value='A' />
                <label htmlFor='q4a'>A. An attempt to make an online service unavailable by overwhelming it with traffic</label>
              </div>
              <div>
                <input type='checkbox' id='q4b' name='q4' value='B' />
                <label htmlFor='q4b'>B. A method of encrypting sensitive data</label>
              </div>
              <div>
                <input type='checkbox' id='q4c' name='q4' value='C' />
                <label htmlFor='q4c'>C. A type of firewall</label>
              </div>
              <div>
                <input type='checkbox' id='q4d' name='q4' value='D' />
                <label htmlFor='q4d'>D. A legal requirement for data protection</label>
              </div>
            </div>

            {/* Question 5 */}
            <div className='mb-4'>
              <label className='font-semibold'>5. Which of the following is an example of a strong password?</label>
              <div>
                <input type='checkbox' id='q5a' name='q5' value='A' />
                <label htmlFor='q5a'>A. password123</label>
              </div>
              <div>
                <input type='checkbox' id='q5b' name='q5' value='B' />
                <label htmlFor='q5b'>B. 123456</label>
              </div>
              <div>
                <input type='checkbox' id='q5c' name='q5' value='C' />
                <label htmlFor='q5c'>C. qwerty</label>
              </div>
              <div>
                <input type='checkbox' id='q5d' name='q5' value='D' />
                <label htmlFor='q5d'>D. !Q2w#E4r%</label>
              </div>
            </div>

            {/* Question 6 */}
            <div className='mb-4'>
              <label className='font-semibold'>6. What is the main purpose of encryption?</label>
              <div>
                <input type='checkbox' id='q6a' name='q6' value='A' />
                <label htmlFor='q6a'>A. To convert data into a secure format that is unreadable without a key</label>
              </div>
              <div>
                <input type='checkbox' id='q6b' name='q6' value='B' />
                <label htmlFor='q6b'>B. To delete sensitive data permanently</label>
              </div>
              <div>
                <input type='checkbox' id='q6c' name='q6' value='C' />
                <label htmlFor='q6c'>C. To compress files for storage</label>
              </div>
              <div>
                <input type='checkbox' id='q6d' name='q6' value='D' />
                <label htmlFor='q6d'>D. To enhance the speed of data transmission</label>
              </div>
            </div>

            {/* Question 7 */}
            <div className='mb-4'>
              <label className='font-semibold'>7. Which of the following is a common method for authenticating users?</label>
              <div>
                <input type='checkbox' id='q7a' name='q7' value='A' />
                <label htmlFor='q7a'>A. Password</label>
              </div>
              <div>
                <input type='checkbox' id='q7b' name='q7' value='B' />
                <label htmlFor='q7b'>B. Biometric scan</label>
              </div>
              <div>
                <input type='checkbox' id='q7c' name='q7' value='C' />
                <label htmlFor='q7c'>C. Security token</label>
              </div>
              <div>
                <input type='checkbox' id='q7d' name='q7' value='D' />
                <label htmlFor='q7d'>D. All of the above</label>
              </div>
            </div>

            {/* Question 8 */}
            <div className='mb-4'>
              <label className='font-semibold'>8. What does the term "social engineering" refer to in cybersecurity?</label>
              <div>
                <input type='checkbox' id='q8a' name='q8' value='A' />
                <label htmlFor='q8a'>A. The use of physical security to protect data</label>
              </div>
              <div>
                <input type='checkbox' id='q8b' name='q8' value='B' />
                <label htmlFor='q8b'>B. Manipulating people into giving up confidential information</label>
              </div>
              <div>
                <input type='checkbox' id='q8c' name='q8' value='C' />
                <label htmlFor='q8c'>C. The development of secure software</label>
              </div>
              <div>
                <input type='checkbox' id='q8d' name='q8' value='D' />
                <label htmlFor='q8d'>D. Encrypting data to secure it</label>
              </div>
            </div>

            {/* Question 9 */}
            <div className='mb-4'>
              <label className='font-semibold'>9. Which of the following is a benefit of using a VPN?</label>
              <div>
                <input type='checkbox' id='q9a' name='q9' value='A' />
                <label htmlFor='q9a'>A. It encrypts your internet traffic</label>
              </div>
              <div>
                <input type='checkbox' id='q9b' name='q9' value='B' />
                <label htmlFor='q9b'>B. It hides your IP address</label>
              </div>
              <div>
                <input type='checkbox' id='q9c' name='q9' value='C' />
                <label htmlFor='q9c'>C. It allows access to restricted content</label>
              </div>
              <div>
                <input type='checkbox' id='q9d' name='q9' value='D' />
                <label htmlFor='q9d'>D. All of the above</label>
              </div>
            </div>

            {/* Question 10 */}
            <div className='mb-4'>
              <label className='font-semibold'>10. Which of the following is a key aspect of the GDPR (General Data Protection Regulation)?</label>
              <div>
                <input type='checkbox' id='q10a' name='q10' value='A' />
                <label htmlFor='q10a'>A. It applies only to companies within the EU</label>
              </div>
              <div>
                <input type='checkbox' id='q10b' name='q10' value='B' />
                <label htmlFor='q10b'>B. It grants individuals more control over their personal data</label>
              </div>
              <div>
                <input type='checkbox' id='q10c' name='q10' value='C' />
                <label htmlFor='q10c'>C. It focuses on securing physical documents</label>
              </div>
              <div>
                <input type='checkbox' id='q10d' name='q10' value='D' />
                <label htmlFor='q10d'>D. It mandates the use of two-factor authentication</label>
              </div>
            </div>

            <button type='submit' className='mt-5 px-4 py-2 bg-blue-500 text-white rounded-md'>
              Submit
            </button>
          </form>
        </div>
      </section>
    </NavLayout>
  )
}

export default Page;
