import React, { Component } from 'react';
import {H1, H2, H3, H4, H5, HR, IMG, P} from './Projects.style';

class Projects extends Component {
    render() {
        return (


          <div>
              <div id="projects" className="container-fluid" style={{marginTop: "30px", paddingTop: "30px"}}>
                  <div className="row"  >
                      <div className='col-lg-1 col-md-8 col-sm-12 col-xs-12' data-aos="fade-in-up" data-aos-delay="1500" data-aos-duration="1000" data-aos-offset="60" data-aos-once="true">
                      </div>
                      <div className='col-lg-5 col-md-4 col-sm-12 col-xs-12 text-center' data-aos="fade-in-up" data-aos-delay="1500" data-aos-duration="1000" data-aos-offset="60" data-aos-once="true">
                      </div>
                  </div>
              </div>

              <H2>Lessons</H2> <br/>

              <H3> Here are my 7 key lessons:</H3> <br/>

              <H1>  N/B: Some of my lessons have Swahili headers. Swahili is very rich as a language in terms of proverb, riddles and wise sayings; and this inspired me
                     to have all my lessons have swahili headers.
              </H1> <br/>

              <div className="row" style={{paddingTop: "15px", paddingBottom: "15px"}}>
                  <div className='col-lg-5 col-md-5 col-sm-12 col-xs-12 text-center' data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-offset="320" data-aos-once="true">
                      <IMG className="img-responsive" src={require("../../assets/Projects/feedback.jpg")} height="600px" width="600px"/>
                  </div>
                  <div className='col-lg-7 col-md-7 col-sm-12 col-xs-12 pull-right' style={{paddingTop: "20px"}}>
                    <H4> a) Kuuliza Si Ujinga, Ujinga ni kutouliza </H4> <br/>
                    <H5>  In English: "Asking for help is not foolish, Not asking for is" </H5> <br/> <br/>
                    <P>Giving is receving and vice versa. This one sentence summarizes this great proverb. It is human nature that we are kinder and more receptive to those
                     who are nice to us and this aplies in the work place. Growing in Kenya, one month that I always looked foward to was December. During this month, students
                    get one and half months of vacation from late November to early January. During these six weeks, I would spend not less than a fours weeks upcountry in my
                    grandparents farm. The long days spent feeding the animals and working in his fruit farm were arduous but I cherished every moment of it. This trips
                    blossomed my gradmother's relationship. Each time I visted her, she would always slaughter me a goat but one day on arrival I found no meat roasting at the barbecue.
                    Being the spoilt - not really spoilt, I earned it- grandson, I immediately asked her what was going wrong and her reaction startled me. She just laughed and kept
                    chatting with my parents like nothing was a miss. She eventually gave in and gave me the most amazing news I had gotten as a child; I was getting a goat. I would spend most of my
                    days watching over the goat till I came back the next summer. By this time I had two more kid goats and slowly by slowly my goat kingdom is growing. This was due to the fact that
                    I always sought my grandmother's help, feedback and advice. To those who seek, they shall find; and for my case I found myself owning goats before I got to middle school. Not
                    only did I get the goats but lifetime experience in farming and animals. This curiousity I had as a child  hope to carry on with e the rest of my life. This will mean more answers
                    to my numerous questions and much more effective feedback from my inquiring mind.
                    </P>
                  </div>
              </div>

              <div className="row" style={{paddingTop: "15px", paddingBottom: "15px"}}>
                  <div className='col-lg-5 col-md-5 col-sm-12 col-xs-12 text-center' data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-offset="320" data-aos-once="true">
                      <IMG className="img-responsive" src={require("../../assets/Projects/intrin.png")} height="600px" width="600px"/>
                  </div>
                  <div className='col-lg-7 col-md-7 col-sm-12 col-xs-12 pull-right' style={{paddingTop: "20px"}}>
                    <H4> b) Usipojipanga, Utapangwa </H4> <br/>
                    <H5>  In English: "If you dont plan your life, someone else will" </H5> <br/> <br/>
                    <P> More often than not, you will find yourself doing something and asking yourself, "why did I do this again?". These are the times when we let peer pressure and
                    society decide what are our targets and goals. This type of goals are extrinsic. Intrinsic goals however are goals that come from within us. They are derived from our
                    passions, self-worth and purpose in life. A couple of weeks ago, my roomate bust into the living room, chest out sweating out and headed straight to the weighing scale.
                    In recent weeks, this was his post gym routine and I was starting to get tired of it. Moreover, he came back, hung around the kitchen as I cooked and boasted about how
                    much he had gained muscle weight, lost fat and lost three pounds in a month. As every second went by, I got irrate with his behaviour and we soon got arguing. As the
                    arguing settled down, we decided to settle the matter in the gym. By the end of a fortnight, whoever had lost most weight in that timespan would be the winner. Although
                    the stakes were merely bragging rights and that night I went to bed with great energy and conviction for the next day, day one. That morning came and as sooner had I peered
                    out of the cormforts of my sheets, I slid back in and decided that a bet was less worthy than my morning snoozes. By the end of the week, my gym attendance was nil and I
                    had felt luttle remorse. This as I came to discover later in class this semester was due to how I set my goals. When my roomate and I bet, the bet became the goal and this was
                    unfortunately an extrinsic goal. Since then, I have vowed to always time to think with my heart, and consider my ethos and pathos. The longer I get to craft a goal, the more
                    personal it becomes and consequently more zeal and zest when working to achieve my goals.
                    </P>
                  </div>
              </div>

              <div className="row" style={{paddingTop: "15px", paddingBottom: "15px"}}>
                  <div className='col-lg-5 col-md-5 col-sm-12 col-xs-12 text-center' data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-offset="320" data-aos-once="true">
                      <IMG className="img-responsive" src={require("../../assets/Projects/zone.jpg")} height="600px" width="600px"/>
                  </div>
                  <div className='col-lg-7 col-md-7 col-sm-12 col-xs-12 pull-right' style={{paddingTop: "20px"}}>
                    <H4> c) Mtaka nyuki hapiti mzinga    </H4> <br/>
                    <H5>  In English: "He who needs honey isn't one to avoid a beehive" </H5> <br/> <br/>
                    <P> In order to achieve our goals as leaders, we have to accept challenges that get us out of our comfort
                     zones. From the heading, just as bee farmer has to face bees to harvest honey, leaders often have to overcome
                     their fears and weaknesses in order to achieve their goal. Since the summer, I have been having anxiety and
                     psychological health problems. However, this was not an issue that I immediately accepted and sought help for.
                     During my free time, I would sleep in my bed either doing nothing or watching random videos on my laptop. Each
                     time I made an effort to be sociable, I would always feel the urge to be alone and secluded in my cave. This was
                     further reflected in my digital world as I avoided texting my friends or using social media. This was a major
                     shift from the extroverted and outgoing being I was, and quickly, my friends noticed that something was amiss.
                     One morning, two of my friends came to my room and advised me to speak to someone in mental health services. At first,
                     I was resistant to the idea since I never pictured myself needing psychological support. I've always considered myself
                     mentally strong and never foresoo ever needing one's intervention psychologically. Moreover, I was raised in a culture
                     that look down upon mental health as a weakness and deep inside that played a huge part. It took a lengthy chat and some
                     persuation for me to see a metal health advisor the next day. I started visiting a counsellor and currently working a way out of my problems. Meeting
                     with the counsellor has been quite tolling from my part since I dread talking about my personal feelings and emotions. However,
                     this uneasiness has been the key to working out my problems. The only way I was going to overcome my psychoogical dilemma was
                     by getting out of my comfort zone and facing my fears.
                    </P>
                  </div>
              </div>

              <div className="row" style={{paddingTop: "15px", paddingBottom: "15px"}}>
                  <div className='col-lg-5 col-md-5 col-sm-12 col-xs-12 text-center' data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-offset="320" data-aos-once="true">
                      <IMG className="img-responsive" src={require("../../assets/Projects/team.jpg")} height="600px" width="600px"/>
                  </div>
                  <div className='col-lg-7 col-md-7 col-sm-12 col-xs-12 pull-right' style={{paddingTop: "20px"}}>
                    <H4> d) kidole kimoja hakivinjji chawa    </H4> <br/>
                    <H5>  In English: "one finger will not kill a bug" </H5> <br/> <br/>
                    <P> I am a big follower of the saying, “teamwork makes the dream work” and the two articles from the assignments really resonated to me. This is because a collaborative environment brings about brainstorming, refining and improving already present ideas which leads to the best and most inclusive solutions. In a group, team members have different point of views which make breaking down of a problem more thorough as it ensures all bases are covered. Having worked in collaborative environments, I have seen the impact it has. During my sophomore fall semester, I was in a group project for my Web Development class. We had four members in our group – Timi, Reshad, Tony and I. Working in a team made the project much easier and efficient. This is because we could always bounce ideas of each other and ask for help whenever anyone ran into a wall. In one part of the project, we got stuck for two days and we couldn’t proceed further until we solved the problem. None of us could crack it but luckily, Timi’s roommate had faced a similar issue in the past and he helped us out. A collaborative environment not only allows you to access the team but also people outside the team. If not for Timi in the group, we wouldn’t have gotten his roommate’s feedback. However, all was not smooth sailing as we were not to submit one of our project’s evaluation on time. This is because we had agreed in a meeting we had four days prior that Reshad was going to send it. Reshad meanwhile forgot as he assumed the group leader, Tony was the one submitting the assignments as usual. This was a breakdown in communication that cost the team points that would have been avoided by constantly relaying information within the group and keeping everyone in the loop. Moreover, this highlighted another hitch with collaborative environments. In groups, taking initiative is reduced as more often than not, the group leader is relied on to assign and remind people of their roles. This reduces each members input which leads to waste of brainpower and manpower.
                    All in all, working in a group brings more positive than good. Although time inefficient, It allows for thorough, detailed and comprehensive results.
                    However, a streamlined means of communication should be available to ensure that the team is on the same page always

                    </P>
                  </div>
              </div>

              <div className="row" style={{paddingTop: "15px", paddingBottom: "15px"}}>
                  <div className='col-lg-5 col-md-5 col-sm-12 col-xs-12 text-center' data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-offset="320" data-aos-once="true">
                      <IMG className="img-responsive" src={require("../../assets/Projects/shake.jpg")} height="600px" width="600px"/>
                  </div>
                  <div className='col-lg-7 col-md-7 col-sm-12 col-xs-12 pull-right' style={{paddingTop: "20px"}}>
                    <H4> e) Keep calm and unpack  </H4> <br/> <br/>
                    <P> To solve conflicts benevolently, One needs to stay present noticing the changes in their body in order to control them, let go of the story to break the feedback loop between their thoughts and actions, focus on the body to explore where it hurts and learn how to endure it, and finally breathe to keep them poised and keep their heads clear.

Two days ago I got into an argument with my suitemate about taking out the trash. As the conversation got more heated, my roommate pulled the power cord of the Xbox I was playing on as he claimed I was ignoring the argument. To me, this came across as an extreme way to get his point across and for a few seconds - maybe more than a few- I lost my head and started calling him out while using unpleasant words. Understandably, this did not sit well with him and at that moment I felt like I had gotten what I want. He made me mad by pulling of the plug and I did the same by calling him names. In the midst of this, I realized that there was no way our conflict would be solved by both of us going on the offensive trying to prove a point. When this hit me, I walked to my room and asked my roommate that we should solve the dispute when we both cooled off. This worked as we later made peace as we both acknowledge our mistakes and acceded to working out issues appropriately in the future. If I had noticed the tone of my voice and choice of diction, let go of his actions and focused on solving the conflict rather than getting one up over the other; the feud would have been averted or have been less heated.

In a squabble or any feud for that matter, we should retrain ourselves to respond rather than to react; and this way our anger becomes clarity which augments the reconciliation process.
  .
                    </P>
                  </div>
              </div>

              <div className="row" style={{paddingTop: "15px", paddingBottom: "15px"}}>
                  <div className='col-lg-5 col-md-5 col-sm-12 col-xs-12 text-center' data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-offset="320" data-aos-once="true">
                      <IMG className="img-responsive" src={require("../../assets/Projects/why.jpg")} height="600px" width="600px"/>
                  </div>
                  <div className='col-lg-7 col-md-7 col-sm-12 col-xs-12 pull-right' style={{paddingTop: "20px"}}>
                    <H4> f) It's always about the Why    </H4> <br/> <br/>
                    <P> In order to achieve our goals as leaders, we have to accept challenges that get us out of our comfort
                     zones. From the heading, just as bee farmer has to face bees to harvest honey, leaders often have to overcome
                     their fears and weaknesses in order to achieve their goal. Since the summer, I have been having anxiety and
                     psychological health problems. However, this was not an issue that I immediately accepted and sought help for.
                     During my free time, I would sleep in my bed either doing nothing or watching random videos on my laptop. Each
                     time I made an effort to be sociable, I would always feel the urge to be alone and secluded in my cave. This was
                     further reflected in my digital world as I avoided texting my friends or using social media. This was a major
                     shift from the extroverted and outgoing being I was, and quickly, my friends noticed that something was amiss.
                     One morning, two of my friends came to my room and advised me to speak to someone in mental health services. At first,
                     I was resistant to the idea since I never pictured myself needing psychological support. I've always considered myself
                     mentally strong and never foresoo ever needing one's intervention psychologically. Moreover, I was raised in a culture
                     that look down upon mental health as a weakness and deep inside that played a huge part. It took a lengthy chat and some
                     persuation for me to see a metal health advisor the next day. I started visiting a counsellor and currently working a way out of my problems. Meeting
                     with the counsellor has been quite tolling from my part since I dread talking about my personal feelings and emotions. However,
                     this uneasiness has been the key to working out my problems. The only way I was going to overcome my psychoogical dilemma was
                     by getting out of my comfort zone and facing my fears.
                    </P>
                  </div>
              </div>


              <div className="row" style={{paddingTop: "15px", paddingBottom: "15px"}}>
                  <div className='col-lg-5 col-md-5 col-sm-12 col-xs-12 text-center' data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-offset="320" data-aos-once="true">
                      <IMG className="img-responsive" src={require("../../assets/Projects/power.jpg")} height="600px" width="600px"/>
                  </div>
                  <div className='col-lg-7 col-md-7 col-sm-12 col-xs-12 pull-right' style={{paddingTop: "20px"}}>
                    <H4> g) The power of body language    </H4> <br/> <br/>
                    <P> The power of superheroes is communicated through the depictions of srong body language. Strong body language communicates
                     confidence, which translates well into perceived persuasiveness. Strong body language emits a noticeable posture. From the heading, just as bee farmer has to face bees to harvest honey, leaders often have to overcome
                     their fears and weaknesses in order to achieve their goal. Since the summer, I have been having anxiety and
                     psychological health problems. However, this was not an issue that I immediately accepted and sought help for.
                     During my free time, I would sleep in my bed either doing nothing or watching random videos on my laptop. Each
                     time I made an effort to be sociable, I would always feel the urge to be alone and secluded in my cave. This was
                     further reflected in my digital world as I avoided texting my friends or using social media. This was a major
                     shift from the extroverted and outgoing being I was, and quickly, my friends noticed that something was amiss.
                     One morning, two of my friends came to my room and advised me to speak to someone in mental health services. At first,
                     I was resistant to the idea since I never pictured myself needing psychological support. I've always considered myself
                     mentally strong and never foresoo ever needing one's intervention psychologically. Moreover, I was raised in a culture
                     that look down upon mental health as a weakness and deep inside that played a huge part. It took a lengthy chat and some
                     persuation for me to see a metal health advisor the next day. I started visiting a counsellor and currently working a way out of my problems. Meeting
                     with the counsellor has been quite tolling from my part since I dread talking about my personal feelings and emotions. However,
                     this uneasiness has been the key to working out my problems. The only way I was going to overcome my psychoogical dilemma was
                     by getting out of my comfort zone and facing my fears.
                    </P>
                  </div>
              </div>



              <HR data-aos="zoom-in" data-aos-delay="500" data-aos-duration="500" data-aos-offset="0" data-aos-once="true"/>

        </div>

        );
    }
}

export default Projects;
