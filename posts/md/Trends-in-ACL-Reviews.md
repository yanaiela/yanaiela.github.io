# Meta-Reviewing for ACL-ARR (EMNLP)

Last week, I completed my meta-reviews for the ACL-ARR cycle of EMNLP. This is not my first time ACing, and probably not the last, but I noticed certain trends that keep reappearing in the way people review, and I wanted to write about them. While many have written about conference reviews [before](https://2023.aclweb.org/blog/) (or, mostly [complained](https://x.com/roydanroy/status/1686479233411915776)), there’s a particular trend that keeps bothering me, specific to some of the reviewing fields used in ARR, that many reviewers fail to understand and complete (in my subjective opinion), which I think is worth discussing.  
I will briefly discuss how I view and fulfill my role as an AC and my expectations from reviews. Then, I will showcase some statistics from my last AC cycle and finally discuss these issues.

# Area Chairs Role, and Interaction with Reviewers

There are different phases of being an AC, but I'll focus on the phase once the reviewers submit their reviews and we have to write a meta-review.  
The job of an AC is to write a meta-review that summarizes the different reviews' opinions of the paper and provides a (subjective) summary of the paper, with all its strengths and weaknesses. This review is summarized in a score, but it also includes each paper's (again, subjective) strengths and weaknesses.  
How do we do that? Based on the reviews. If the reviews are clearly written and generally in agreement with each other, our job is easy: We summarize the reviews and provide a suggestion to the next chair (SAC in the case of \*ACL). When this happens, I typically don't even read the paper (just the abstract, always at least the abstract). Easy.  
However, reviewers often disagree (in my batch, there was a general sentiment consensus between reviewers in four out of eight reviews, shown in the table in the next section). That's where our job becomes more complicated, and we must bring our own subjectivity. Yes, it is subjective. People disagree, and we need to come up with a concrete recommendation of what to do with this paper (roughly, to accept or reject). We need to employ our knowledge of the domain, the reviewers' expertise, and the paper to make the best possible suggestion about which arguments hold, which don’t, how severe they are for the paper, etc.  
This is where the author's response and reviewers' engagement come into play. We, the ACs, get additional signals that we incorporate into the meta-reviews.  
This process is not trivial and sometimes involves reading the entire paper.

# Some Statistics…

Let's start with some statistics to showcase some of the difficulties and inconsistencies we observe in reviews and meta-reviews. These stats are from my batch and are obviously not representative due to the small sample, but it’s consistent with my past experience.

During this cycle, I was responsible for eight papers in total, one of which was withdrawn after receiving the reviews. All besides one received three reviews each, and one had four in total (as I had to recruit an emergency reviewer due to an unresponsive one, which eventually submitted their review). I didn't have any missing reviewers this cycle (thanks, everyone\!).  
The mean average assessment for all papers was 2.4, with a minimum of 1.7 and a maximum of 3.4.

In the following table, I summarized the "sentiment" agreement between the reviewer's scores (I consider 1 & 2 as negative and 3-5 as positive), the reviewer's majority sentiment, and my meta-review sentiment (where I classified three here as medium, as it is borderline of being accepted).  
As can be seen in the table, in 50% of the cases there's some mismatch in sentiment towards the paper, and for most papers, the general sentiment is rather negative (3/8). In addition, I tend to be lenient with my meta-reviews, and while I listen to reviewers, I sometimes give a more favorable score for papers than the average review (2/8).

| Agreement | Majority Sentiment | Meta Sentiment |
| ----- | ----- | ----- |
| agree | negative | negative |
| agree | negative | negative |
| disagree | negative | positive |
| disagree | positive | positive |
| disagree | positive | positive |
| agree | negative | negative |
| disagree | positive | positive |
| agree | negative | medium |
| 4/8 | 3/8 | 4/8 |

The meta-review scores I gave had a mean of 3.1, with three 2s, four 4s, and a single 3\.  
As you can see, my scores are higher than the average reviewers' scores.  
Admittedly, some papers are good, some need more work, and some should have probably not been submitted. But still, why do I typically score higher than the average reviewer?

# Weak Signal from Reviews

As I mentioned earlier, the main (initial) signal for writing a meta-review is based on the reviews we get from reviewers. The current version of ARR (as of July 2024\) asks to fill up the following sections: “Paper summary”, “Summary of strengths”, “Summary of weaknesses”, and “Comments suggestions and typos” as the main verbal fields. I will focus on the “weaknesses” part, which is arguably the most contentious field: some points brought by reviews are not actual weak points, and the job of ACs is to take those and consolidate them into a meta-review.  
However, reviewers often raise certain points that I disagree with, and that are worth discussing.

1. “Conflating weaknesses with suggestions”  
   From the [ARR reviewing guidelines](https://aclrollingreview.org/reviewertutorial\#weaknesses-of-the-paper):  
   *For “**weaknesses**,” there are many things that could go wrong in a study… There may be claims that are not actually supported by the evidence or by the arguments, but that are presented as conclusions rather than as hypotheses/discussion. The framing may be misleading. There may be obvious methodological flaws (e.g., only the best run results are reported), errors in the proofs, in the implementation, or in the analysis. There may be insufficient detail to understand what was done or how to reproduce the method and the results.*  
   These are all great examples of weaknesses. However, [reviewers tend to conflate weaknesses with requests, suggestions, and clarifications](https://x.com/mariusmosbach/status/1775566756918009941). Every paper has limitations, and more experiments can be done. However, our work as reviewers is to evaluate the paper **as is**, not as the paper **you** would have written. It is great if a reviewer has suggestions for how to improve the paper, and I would recommend providing such suggestions to authors. However, that should come in a separate section of the review.  
   **On the other hand**, if it’s a suggestion that is due to a **limitation**, that’s a separate story. However, it should be presented by the reviewer as such.  
   So, **do not write**, “It would be interesting to analyze …”. **Do write**: “The current evidence the paper provides is insufficient because \[a,b,c\]. A way to answer such a limitation would be to \[x,y,z\]”.  
2. “Requesting more experiments, just because”  
   There are always more experiments to run. We need to judge the paper based on the experiments they did run, not on the ones they could have. Similar to the first point, this can entail an actual weakness, but from my experience, these often do not match the lack of experiments, but the lack of identified weaknesses by the reviewer.  
   This point is tricky at times, as it can be culturally-, and trend- dependent. For instance, in the extreme, a paper that trained a new language model, but only evaluated on 5-year old benchmarks would probably not be taken seriously, and would require more evaluation experiments to be able to claim state-of-the-art. However, there are \*many\* other objectives in research, [besides sota](https://hackingsemantics.xyz/2020/reviewing-data/), which are worthwhile. As such, the reviewer’s job is to determine whether the existing experiments are convincing enough to back-up the claims made in the paper, and the AC’s job to balance that out.  
   So instead of simply asking for more experiments, **convince** the authors (and the AC) what these experiments would add to the paper, and how their absence does not satisfy the paper’s claims.  
3. “Arbitrary low scores, not matching the essence of the verbal review.”  
   Admittedly, different conferences use different scalar systems, the wording of each score often is different, and sometimes even the same conference changes its wording, which does not help with score consistencies.   
   However, the general sentiment and severity of the verbal review should match the numeric score. My obvious suggestion is to read the numeric scores and match your general sentiment of the reviewed paper with that score.   
   A good test for this issue is whether the reviewer could predict its own score based on their verbal review after writing it.  
4. “Simplicity phobia”  
   This issue is discussed endlessly and was identified as one of the [shortcuts](https://2023.aclweb.org/blog/review-acl23/\#2-check-for-shortcuts) reviewers take, but it is still common and very frustrating to read as an AC.  
   Simplicity is a strength, not a weakness\!  
5. “Lack of participation in the discussion”  
   Besides the reviews, the discussion period is supposed to provide a platform for the paper’s authors to correct misunderstandings, clarify specific points, and answer questions. This is a crucial part of the review process, and authors spend much time on it. Reviewers should take it seriously and correspond with the authors on the points they have brought to their reviews. It is OK to disagree, but reviewers should communicate this clearly to the authors and the ACs.   
   Don’t disappear after writing the reviews\!

# 

# Summary

Eventually, many of the points I raised here are due to disagreements and views on a topic or paper, which is entirely valid. However, how we communicate these issues and disagreements to others, whether these are other reviewers, ACs, SACs, etc., is crucial. Eventually, there is much room for subjectivity in the review process, and the job of ACs, SACs, etc., is to make these subjective judgments. However, to make the best (subjective) judgments, we need objective facts that largely originate from reviewers.  
Separation of core ideas and limitations of a paper should be distinct from other, smaller points for improvement or clarification, and these should appear in their respective positions in the review.  
Clear communication and engagement are key, and we should strive to improve.

Yes, reviewing is a service we all do without getting paid.  
But it’s part of the job, so let’s do it the best we can.

# Epilogue

Two days ago, a day after writing this blog, I was contacted by one of my SACs, who asked me to update one of my meta-reviews as it “did not match the reviewers’ reviews and scores”. My score was higher than each individual review \- not by much, but still. I declined. The request was fair, I guess, and their motivation was clear: we don’t want to disappoint the authors if their paper still gets rejected.  
In this particular case, the reviews included many of the fallacies I raised in this post. I explained to my SAC, in detail, what the reviewers were complaining about, their scores, and the delta from a “publishable” paper, and justified it based on the verbal reviews. I insisted that my meta-review and higher score made sense in that case.  
My SAC took it well and trusted my decision, for which I’m thankful.

Our job as ACs is to read and consolidate the hard work of reviewers, but eventually, we need to make up our own minds about each paper, given the information we have at hand.

