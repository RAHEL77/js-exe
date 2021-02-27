const button = document.querySelector("#btn");
button.addEventListener("click", () => {
    const num = document.querySelector("input").value
    if (!isNaN(parseInt(num))) {
        // if (!Number.isInteger(num)) {
        for (let i = 0; i < num; i++) {
            const img = document.createElement("img");
            img.src = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSEhMWFhUWFRUXFRYYFRgVFRUYFxYWFhgVFxcYHSghGBolGxUVITEiJSkrLi4uFx8zODMsNyguLisBCgoKDg0OGhAQGi0mHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy0tLSstLS0tLS0tLS0tLSstLf/AABEIAMIBAwMBEQACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYBAwQCBwj/xABEEAABAwICBgcEBwYGAgMAAAABAAIDBBEFIQYSMUFRYRMiMnGBkaEHQlKxI2JygpLB0RQzorLh8ENTc5PC0lSDFiVj/8QAGgEBAAIDAQAAAAAAAAAAAAAAAAIDAQQFBv/EADURAAIBAgQDBAoCAgMBAAAAAAABAgMRBBIhMQVBURNxkbEUIjJCYYGh0eHwUsEjMyQ08RX/2gAMAwEAAhEDEQA/APuKAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIDBKA1Pq427XtHeQoOpBbtE1SnLZM8Nr4jskZ+ILCrU37y8SToVVvF+BvbIDsIPippp7FbTW56WTAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBARtZjMbDqtu93Budu87AtDE8Ro0dG7vojbpYOpNXei+JzMfUzZ3bE3kNZ3rl6LSji8TiNY2hHruy1xw9Lk5PwRubhUfvl8h+u8kfhGXop5Ie+3Lvf9KyIPFVPctHuX97m+Olib2Y2DuY0fIKUZ04ezFL5IqlUqy9qTfzZsIb8I8gpekIis3U0mjiP+G0HiAGnzGayqlN8kT7Wr/J+ZgUxH7uRzeTj0jfHW638StjP+Mmvqvrr9R2iftxT7tH9NPoZNY9n7xl2/Gy7h3ubtHhcDirVXcfaWnVfbfzXxHYwn7Etej08Ht5dx2QTteA5jg4HYQbhbEJxmrxd0UThKDtJWZsUiIQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEBpq6psbdZ5sPnyHFV1asKUXKbsidOnKpLLFEFNUS1BsLtZ8I7RHFx3D+89i5Klicf/q9Sn/J8+7r8vmzblOjhdPan5fvx+SOqnwgtGWq3la/r/RbFPg2Eh7WaT77LwX3ZrTxdeo7uy+p0mGZuwtcOBBB8wfyW48HQatG6+d/P7lOafPU1trM9VwLXcD8wd4XIxtCrhlmeseq/tcvL4l1OSnpzPfTBc70qLLsjHSDipKvF8zGVh0gGZK2aMZ1pZaauyMmoq7MtZI7YA0fWzPkDl5rs0sDCH+yTb+G3i/wazqyl7Kt3nroJRse3xbl6ELZVKitk/ExefUjKyJzHF4+ifve25hf/AKrd32t28qipg3fPQfrdOvev70febVLF2WSurx+q7n/Wx24Zi4kcY5BqSja07D9Zp94KvD4tVG4SVpLdfYsr4Rwj2kHeD5/clFuGmEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEBorapsTS92weZO4Dmqq1aFGDnN6IspUpVJZYlfAfM8PftJsxu5v9bbSuBQjPiWI9fSEdX3dO9+V7G5iK0cLTyU93pfr+EWGmpwwWHieK9LpZJKyWy5I5kI21e5tWCRglZMHFiMAe3gRmDvB4qSts9U9xYjKeovke0NoXjeJ4L0WtaPsvVfb5G/Slnjc3ErQhCU5KMVq9EWPQ68Pgv1z90cOfevc4XCxwlLs47+8+r+y5HNnLtJXe3IkFaZBWTBrlAIsU2BUcYpNVwbcgbYnDIsIzLL8LXI4WI3gLm8WoZqfpENJR37vx5G9w7EOlU7N+zLkSuj2NdJ9FLlKBt3PHEc+IWOH45V45Ze15luOwXZf5Kfsv6E8ukc0IAgCAIAgCAIAgCAIAgCAIAgCAIAgMONsysN2CVysyzGok1/cabMHH63ju5d68lxHGPEVLL2Vt9zsRgqEMvvPf7ElhrLvJ+EAeJzPpqrv8Jpdng1LnJt/JaLyficavLPX7l+fsShW+GR9djlPEH680YMYJc3XbrCzda2re97ZrKTewbS3Pz/Raf4tA/wDahOKiAvcXROIe3VvfV1razLawAI8jsV3Y3V4u5UqqvZqx93wLFo62mjqoidSRgcAbXacw5rrb2uBaeYVNy0icXk6KVrxlc6rvHJc/i1HtcM3zjqbGFlaeXqduvrFg+I+gzXI4FRU8Q5v3U383p9yzFSyxsuZYIxYWC9O9zSK/hWmVNPU1VOJGtNK5rHFzgNY2Ovq33Nd1TzB5JZ7mbooOmXtMmpsQD6VzKiijaxk7GlrhrlziSx4zDw22VyOIVkaUnHMiLnHNlZ9Soaxk8ccsbtZkjWvY7i1wDgfIqtkiN0ph+jJG0dZvItNx62WItN2ezEr2uit1IvqyRmzhZzDvC8T62HrOKesW14Ox6ihUU4LNtJFzwDFBURB2xw6r28HDb4b/ABXrcLiFXpqS+ZwsZhnQqZeXLuJJbJqhAEAQBAEAQBAEAQBAEAQBAEAQBAQ2kNSbCFu1+3k0bfPZ4rlcWxPZ0si3l5G/gaerqPZeZqporAALy6RZUld3OvC3deQfWH8jV7jBr/hUu5+bOO3avP5eSJBzlckTufEcS0cfPWYzC23Ty6pi1ri7X6j22dsAPZ8HbLLbil2Hzd/A1KzaqxZU9EdDaynfLJUxOhi6J7HFz2suXCwsL9YXHjzWcHB9pqRxdaLiktXdH1P2Th0OFxtd77pXsysA0yuLSBwIFxycFrVEs7t1Zux2OjSWa+oN7pGDzeFr4nWhJdUXUP8AYmSsDtWSK/P8lyeBpRnVXwX9luL1syyxyLuWNQ/OVZo1PMMQgjGtUftby5msGFzWvc+9jbWLg5pB2W3rdUL4bTqadSooV05bWOvQnQ6opaWumrY+hY+Esa15612kOL9UHIDLM8zY2WMGstRX/dyOKnmtl/dj6voAx0OHUbHghzYWGxvcB3WAN9hAcBbktOdtbG+iQx+sDozbcCqo7knsViilvG0cGtHkAF5HiFniqjXVndwt1Sh3I34NXfs9S0+5IQx/eey7zNvHktnhmI7OplezL8VR7eg1zjqv7Poa9QeaCAIAgCAIAgCAIAgCAIAgCAIAgCAqwk6WaSTdfUb3Ny+d14/iFbta8nyWnh+Ts5ezoxh838/wTFHDfNW4DC9peT2NGrO2hoqD0Uwd7rxqnk4Xt5j+VerwKToulzi7ruf58znVlaan10Ot8qtsSRWNJcAjqXsnY90FTG1zY52AF2q4G7Hg9pmZNrgi5sRc3nCpKD08OTMTgpqzIWfR2efVFbWdJG1paWRRmDpWkNBbI7XcS06oybY5bQpyxMrWiku7903K4YWEZZt38SeysAOq1oAaALAACwAGwACwt3LVbsbKRAl3TVbGDMRAyP4XsWsHmSfurSxlS1PvNqjDmT1WOrrDaw63gNvoSuFgMUqWKTez0fz2+pbWp5oEtS1Yc0G69Zc57RBaQaONnlFRDK6CfqazgNeOURm7BNHca+qdhBB2A3AAF1OrKnt+8iqpSjUVpEdJo3JO4GvqRURtc1wgbEIoS5gIaZLuc54z2XF9huMlmddtWiku7cjTw8YO+/eWF85OzNarNghtI57Rhg7T8u6/9kqLkoJ1JbLUyoubUFzI+BpbluXjKt5Nye71PRRtayPGIM1mkKEHZmzSlZl90XxDp6aN57VtV32m9U+oXsMLV7SkpHnsbR7KvKK23XcyWWwagQBAEAQBAEAQBAEAQBAEAQBAc2JT9HE9/wALSfRVV6nZ05S6ItoQz1Ix6sr+FR2Y0cl4fVs6mJleTLFC2zQF6rD0+zpKJypO7NGIRBzC0/2dxHNYliZYd9pHl9fgYUFP1WQUdeWjUccxv5cwuvSxFLEw7Sk+9dH0KXTlTdmaJKtZZk09ISotkkiJxvG2wjUYdeV2QaD68hzVFSais0ti6nTcnaJ1aN0nRxkk60jzrSO4ngOQGQ/qvO43G527G+qeXQm2rjN3ZKxGPmNO7/8AI7/gPA8uB8F6fhvEFUiqdR+stvj+fM1KtG2q2Ov9qyuDccV21I03GxpfUErLMGXVzI2azjbf3rGVsyQHTmR5kdv7I4BcPiGLVT/HT9lbvq/sdLC0MnrS38ju1LtXGmb0XZnLLsVKNiD1Jz2dVOc8PBzXj7wsbeLfVej4VO8HE0eLw9ify8P/AEuq6xxQgCAIAgCAIAgCAIAgCAw91hdDDdjXJkLk+tlkI5sPrdcvYdrLeIde3qD6LBk59KH2p3c3MHm8BaHEpZcNL95m7w9Xrr5+Ry0DeyO5eVoq9SK+JfWe5OL1ktjmnLVSC1lx8dWjZxT1L6ceZBYlQiQcDuIyIXNoYipRlmg7GzZSVmVyqpqpnYe132m5+i7VPjTa9eK+WhW8NF7Mjp6eukyMgaPqjP1Up8YVvVj/AGTjhYc239DrwjRpsZ1nXc47ScyVysRjJ1Xds2llirRRZoYbBaDdyNzasA1yMDhYomCv1mFSMN4Hln1drfLd4LsYbi1WCtLVfH7kJUKc/h3EVUVNYMiW94af1XRXF4taQ+pX6Cn7xHvbI43eSTz2eS1q+OqVlZvTotF+fmX08NCGq3JqjZZoJWi5FxLw9nwVTI8zgmVK3NmJ0aDS2rnN+KF38Lm2+ZXb4U7Ta+BXxJXwyfRn0aV4aC47ACT4ZrvHnTifMbXJN+RsAsNmUjOH1uu4sPaAuOY/obeYWE7hqx3KRgIAgCAIAgCAIAgNFU62r9r8ifyUoq7IVNjkrajJJKyESEw6s1Kpt9kgLPE9Zp8xb7yr5lvIk9LT9B/7I/5gtDiv/WfevM3eG/7vk/I0UT7WK8vSllmm+pdWV7nBW+0KiifqSOeLnVB6N7gT90HLmvQU8TOt7EH4r+2UVMFOnFSk1qdrcQY9olBOo7MOILWkHZmQuPWwmJzOUqctfg35CMoeymvFGWztdscD3EFacouPtKxdZnl7QVG4ua+iCXM3AaFgzcEoZueSUM3PJchm54eQgucVRCCpxZJSI6aBoVqkySZr12karczwGZ8gtiNKo9ovwMZknqckukcMBETyde5AGq7vsTawV/oVbLmy6fIwpxlJRvqzeKgPbrDYVpOLjKzNyKs7M3aFn/7Bv+lJ82rr8L/2fIr4h/1X3r+z6Di0tmhm9x9BmfyHiu+ecI6rnsFFmUReD1RNYwcWvB7tXW+bQoR9ok9i5q0gEAQBAEAQBAEAQHLiI6mt8JDvDf6EqdN+sQmtCGrpxZZmIFXrar6WO26WM34WeDdUMuRdNK2Xpnn4dV34XB35LWx8c2Hl4+Bs4CVq8fjp4kTQyXb4fkvHvQ3qisz5T7Sg6nME8driQjMBzT1SbEHaDZd7g1X1mvgRx0nKmu/+mWfRX2pUVRG2nrAKZ1g25zgNtlnjsbPey5lejVVN3RwpUWnctztFaadoewhzTm1zHBzTzBGRWZSvuShpsc7tBh7ssje536LVlRpy3ivBF6qzXM1P0MmHZqpR9936qp4Og/cj4Ikq8+ppdonVjZVP8Sf1VbwFD+C8CXpEjU7Rit/8l3qoPh9D+CJLESNZ0crf/IKj/wDPo/wRn0hmP/jtZvnd5lPQKP8ABGfSH1PJ0cqd8r/xO/VZWDpL3F4IdvLqeHaOS73uPe5x/NTWHgtorwRjtpdX4msaPlpzF/VWxptbEHUvuRWIY/TUBOtI0yWt0bOu/wAQOzs94hWyo/yIKfQoM+PSV9ZF1QxpfkBm42BN3HuGweqqxDUaMrbF2Hu6sf3kfUGwdHC0LyknmmztU3eTO32fRa1bI/4IiPxuH/Urs8Lj6zfwKuKStQS6vyLbjctpmfYPhmP09F2zz5FV9SFGRlGnRGIvqnP92Nh/E82HoHqEVqSlsXhWkAgCAIAgCAIAgCAw4XyKAq9XSGxHAkeRIVs9Vcqho7EDWYZe612Xos+F137TC+CT94GEO+u21tcfnwPeFiSzxcWSpyyTUlyZX8EqCBqu2tNj3g2PqF4yrBxbTO5XV3dcyv8AtPwzpaKUgZx2lHc03d/DrLa4ZVyV4356eP5Neos1Nr90Phy9Uc07cKxiopXa1NPJCb3Oo8tB+03Y7xBWVJoi4pl2wr2y4lFYSGGcb9ePVefvRlo/hKlm6ojkLRQ+3hv+NROHOOYP9HtbbzS6MZWTNN7b8Od2o6lnfGxw/gefkmnUWZ2t9sOEn/FkHfBJ+TU06jUw72u4T/nSf7Ev/VLLqNTlqPbJhg7PTv5Nht/OQll1M6kPWe2+mt9FSTuO7XdGwfwlyx6osyuYl7Zqp+UNPDFzcXSnw7I9EvHoMrKhi+mFdU3EtS/VPuMIjZ3WZa477pnfIzlRBAKJIunsswwy1TpCOrEz+J5sPRrvNczitXJSUebf0RtYRes5H0nGZQDq8B8/7C4FNX1OvQWlyb9m8QZFNUOyDn6oPEMyt36xcF6ThsMtNvqaHFp3nGHReZNzRGRxe4ZnIDgBsHqfMronIIPForXUZGUTuhVMGUwdvkc5x8CWAeTQfEpDYS3J5SMBAEAQBAEAQBAa5Z2t7TgOW/ySwNArgcmjxOQ/VZsYua5oRY773J7zmrE7orSsyJqIFSy5EPVhzHCSM2e03afyPEEZHvUSRwOqm9P0jRZsoLtX4XjKRngbG+8OBXn+IULVc3JnYoz7Siuq0JRrmytIOeViOIK5Ek4yM2ys/PelGDGjqZICOqDrRnjG6+qfDMHm0r1+FrqvSU+fPv5nNqwySty5EStgqCAAXWDKi3ojc2nO9RczYjhm9zYKcKOdl6w8TJgCZmZeHh0NbqfgsqRTLDLkaXNIU07mvKm47mFkgEAJQH3XQPBP2KiBkFnvvLLfaCQLN8GgDvuvKY/EdvW9XZaI6NKDjFR5nBiE5fmBd73AAcS42A+QVyoWSSOnSaXcj6FgtNqRRxDsxj8Tvef53t5716SlDJBRPO4ir2tSUyXc2wVhQQGKNuq5E4krgMj44WtLLtF7EGzsyTYg7dvFSjsRe5KMrWHImx4Oy9TkVIwdKAIAgCAIAgNMr7nVBtlc/kFJLmQlK2hzOw9pN9Zw7j+RyKy2YTOeroGj3nX8LeVlBssRFyVbm2brnLLY2/yUc7JZTzDiALtRx29k8bbjbz8CsZri1jnxAZFDKKlM65fE394SJIOBe0EOjPN7SAN12t5KivSVSNjZw9Xs5a7Pc96P42CQ7ccnDf5cQvOYnDtHWyqUbG/T7RQV8AdFbpowXRHc8HbGTwOVjuIHNR4fjPR6lpey9/uaVWnnVuZ8LlgLSWuBa5pIc0ixBGRBG4r1aaautjQaadmbKOidI6w2byozmoo2MLhZ4iVltzZOw4OANi1JVmz0NPh0YKyR6dhfJY7Qm8Ea3YWVLtCqWDNL8NcFlVEUvCtGh9I4blNTRXKhJHNLAeCkpI150WcUsdlbFnPq0suqNd1IoPoXst0ONRI2rmb9Cx14wR+9eDkebGnzItuK5PE8b2cexh7T3+H5fkbNGn7zPoWl+IBo6Jp2ZvPPc3wXLwtDXMzoUlpmfyK9ow/Xm6V19VjiyP60pHa+yxpuTxLRtXdw1HXMynF4jLHJHd7n1agaAAF0TkG2pfsA2nIJa4ND8Ka7a53p+izkRjMd37OGtzce7qj8lh6BO5FVc4v2nW4ZD5DNVuZZlNEGMCIg36nvDlvI4EbeaxnGUtYVhAIAgCAICBxnFBTvLpARGbde3VBtsJ3K+CTiUT9oUukML9j2k94R0yKZ5xHEG2vcKmasbECoVFa6R1o2ufn7rSR5jIKgtNdbBUR6krmENDs8wS0WIuQDszUkjDJCas1mX5LJgpmKy/SixsbEgjaCCCCOYNlBliO3H8NdGIsRhbaGoa10zRsild2j9kuuDzz35amMoZo5kdDBV7+o9+RNYBjAADXHqnYeH9F5yvR1ujdq082q3OXTbQaOuHTQlrKi2TvclA2Nkt6OGY5jJX4HiMsO8stY/Vd32OfUp5u8pFJgr6b6OVhY8bQd/MHY4cwurKvGr60XdHp+GUacKKy6/c7m04ULnTsiVw/RuSYXZq+JVsaTlsaFfGUqTtI2z6HVDc9VvmpujJFMeIYaXMhKvD3MNnBV7G1FQmro4JacJmDoo45qIKama88OiHraPl3c+SuhM5mJw6SLboT7L3yuE1a0siyLYdkkn297G8u0eW/RxfFUv8dDWXX7dX9O84yoq93sfTsUxFlMzoorBwGqNWwbGALAADK9vJcqnTd7t683+8+rNylSz6vbz/BQpIJauZtPDm95zO0Mbvef7zK6uGpZnZF1aahHMy1wYWyB0jGfu6ZrYmHi67XyvP1i8kHjqhdlK2hxJScrt8y20M2QVhUYmc5zm6guQb25WI396ytzDPTqwsPXa5vMjLzGSmQPdTiDSy4I81CZKJT8XxljT2h5rWZcV+fHmvOq1wcTuBuoskfZaD91H9hv8oWwik3rICAIAgOEOaXEuzIcbX3WyyVtnlViiT9Zm92qciARzzUbMymc9SyMN7DfwhRd7FkWQNVWWOSpLiLrq+7SDssgK1BV9XVUyJDVWcwP1T8woMnFn1TQCFsmGsjkAc0unaQcwQZpMs91jZSirx1IttSuioaRaNPoHF8d3UxOR2mLk7i3gfPieRjMG160djt4XFKssr9rzNmE4w5mw3bw/TguLUpXL6lJS33LB0kFS3VeA7k7aOYO48wqE50ndOxRHtaEs0Hb4oh67Q0bYJLfVfmPxDMeIK3KePfvrw/fsdKjxhrSrG/xX2/8Ip2EVsPZa7vY4OHle/otyGNpvaVu83VjMHW9pr5r9X1OaaprNjhP4sePyV/pCfvLxRZGGE3jl8UR8kEztschP2Hn8ljtYfyXii9VKS95eKPUWB1L+zTyfeb0f89lXLE0o7yXn5FM8Zh47zXy18rkrR6Bzv8A3r2Rt4N67+7cB5lUT4hBewm/p+/Q51bilP3E39P36Fmw3R2kouvYa4/xH9aT7o93wAWpUrVquk3ZdPx9zlVK9Wu7eWxoxXSIkFsXVG93vH9EhC2i/P78F9Synh0tZ6vpyKsyKWokEULS57vID4nHcFu0KEpu0TYnOMI5p6I+oaJ6Mx0UfxSuzkfvJ4DgBwXoKNFU42RwMTiHWlflyKzXMJgqeL53nzqLqxblPIxTYoWNAIN1MgT2jlXcOLsiTvyytl63U1sRZPtlBSxg4cU1LdlvkFXMnErE7owcmMH3QqGy04aiWPbqNy2ZC47li4L7gEutTQuP+W30Fr+ivjsVvc71kwEAQBAV3HGTskL4WGQEAuaCA4EZZXIByAV9OWlima1ucUeLTjtU04/9bnfy3Um0RR5q8Ydq5xTDvhkHzaqp7FkCAmnllPUjd3uBYB55+QWuy9G2PDha8rtbkMm/qVgyQ7oRdw4EgICIli+l7mn5hZQPrug9L0dDA072mT/de6T/AJqa2IPcm5GBwIIuDtBWQnbVFEx7QYtJkoyBvMJ7P3D7vds7lzcRgFLWB1sPxD3avj9yr/tDo3akjXMePdcLHvHEcwuLUoSg7SR0klJZou6JWkxeRux1xwOa1pUkVSpRe6JKLH/iaPA2VfZFTw65M6G46z4Xeix2RD0eXVGTjrODvRY7Jj0eXVGmTSAbmeZ/RSVIysN1ZwVGOyHYQ3u2+asjCxbGhBfEhaut3ud5lWxh0L4xb0R2YRo3UVZvYxRb3uFnH7LT8z6rpYfAznq9Ea9bF0qOm76H0bBMEhpWakTdvacc3OPEldqlSjTVonEr4idaV5MklYUlExOLV/aI94m1/B0jZf5XKJIlaCNthcDyUkRO5lOyQZ3BuQC02IF9nDzVhBmiSinZnG5sg4HqP7h7p8wlwQ2N4m5mT45Gnmw2/EAQfAquZOJVajFL7n/gd+iodiw5oqh8rxG1jgXENBcLC5Nhz2lY0M6n2WjpxHGyNuxjWtHc0AD5LYRUbkAQBAEBxYnLqar9wOqeWtsPmAPFWU9dCuotLmluJN4qTgitNmupxAW2qMlZFkXqV7Ea4BUMuRE0rn1BOp2Bteez3D4isWM3NOK0TYiNUkg7b7b7bogc+AYE6rmOR6O4EjuDRtAPxG9h5qSRFs+ttaAAALAZAcFIwZQBAceI4ZDO3Vlja8cxmOYO4qE6cZq0kW0606bvB2KrXaADbTzOZ9V4129wN7+ZK0KvDYS9l2OjT4o9qkb92hDVGjFdH/htk+w8X8nWWjPhtVbam3HGYaXO3ejifR1Le1Ty+Ddb+W6oeCqr3S1VKL2mjyIag7Keb/bcPmFhYSr/ABZLNSXvrxOiHBq1/Zp3Dm4taPnf0VkcBWfIrliMPHefgSdJoNUP/fStYN4Z1j5nL0W3T4Y/eZrz4lSj7Eb95ZcJ0SpoCHBmu/439Y+G4eC6FLC06eyOfWx1arpey6InQFsmmZQBAVvSnDnG8zATdhZIALm2dngb7XN+VuCA4cGqw9rQDmcu7ispAmZqZzOtF1htLb9bmWnYe7y4KVyNjFJibXb8xkQciDwIOYKkYI7F68ZhUzLIlanqQqWiw26PxdLVRNAya7XdyDMwfxao8UitTDeh9LV5WEAQBAEBrqIWvaWOF2uBBHIpsGrlIn0dna8tjqBYHY9t8t2YI3LZjqrmvJ2dj3Ho7VHtVUYH+k4/81FpGVJmqTRxl7yyult7ttVni0ZnuJK15LU2InupqmsGq0W3AAeQAUDJvw/Rl8zhJUXawZiP3nfa+Ectue5TSMNlvp4GsaGMaGtGxrQAB3ALJg2IAgCAIAgCAIAgCAIAgCAIAgCAhsSwMOd0sNo5b3OVmSH64G/6wz71lOxhmKWrIOrI0tdwPzB2EKW5g2V9LFKLvHWAye06rx4jaORuOSbAomN0MrXHUnDh9ZnW8SHAeiolJliRCPZMNrx4N/UqGd9CeU+l6GYQIIQ92ckoDnE7Q3a1vLbc8zyVqK2WFZMBAEAWQEAQEZjNE9414iNcC1jkHDhfceHf4iyE8pCcbkGBWf5Dvxx/9lJzRFQZ4NLVOy6Fw73M/wCyqlqWIl8FwERnpJbOk3b2s+zxPPy5xSMk2sgIAgCAIAgCAIAgCAIAgCAIAgCALAMXQGiqpmyCzh3EZEHiDuROwsQtfR1DQRGBINxuGu8QbDyPkpZrmEit1GF1TjnC/wBP1VbiSTOnBtFpHvDp26kYNy0kFz/q2BNhxvn53GMpm5e7qRgXQC6AXQHpSMBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQGCsAxdYMi6AxdAYuhkXQC6AXQC6AyEMGUB6UjAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBYBhAChk8lAYWAYuhkwSgMXQGLoBdAeghg9BZBlAe1kwEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAFgGCgCGTCAwgMIDBQHkrBk8oDCAyEB7CyYMoAgP/2Q==";
            document.querySelector("#box").appendChild(img)
        }
    } else
        alert("Enter only Number")
})