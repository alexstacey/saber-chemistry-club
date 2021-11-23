<style lang="stylus">

//$borders = #e8e8e8
$borders = hsl(323, 100%, 72%)

$pink = #ff6dc7
$green = #c7ff6d
$blue = #6dc7ff
$title = $green
//$links = hsl(190, 100%, 50%)
$links = $blue

body, h1, h2, h3, h4, h5, h6,
p, blockquote, pre, hr,
dl, dd, ol, ul, figure
    margin 0
    padding 0

body
    font 400 16px/1.5 -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"
    color #eee
    //background-color #fdfdfd
    background-color #222
    -webkit-text-size-adjust 100%
    -webkit-font-feature-settings "kern" 1
    -moz-font-feature-settings "kern" 1
    -o-font-feature-settings "kern" 1
    font-feature-settings "kern" 1
    font-kerning normal
    display flex
    min-height 100vh
    flex-direction column

h1, h2, h3, h4, h5, h6,
p, blockquote, pre,
ul, ol, dl, figure
    margin-bottom 15px

main
    display block

img
    max-width 100%
    vertical-align middle

figure
    & > img
        display block

figcaption
    font-size 14px

ul, ol
    margin-left 30px

li > ul,
li > ol
    margin-bottom 0

h1, h2, h3, h4, h5, h6
    font-weight 400

a
    color: $links
    text-decoration none
    &:visited
        color: darken($links, 20%)
    &:hover
        color: lighten($links, 20%)
        text-decoration underline

.social-media-list
    display table
    margin 0 auto
    a
        &:hover
            text-decoration none
            .username
                text-decoration underline
    li
        float left
        margin 0 5px
        &:first-of-type
            margin-left 0
        &:last-of-type
            margin-right 0
        a
            display block
            padding 7.5px
            border 1px solid $borders
        &:hover
            .svg-icon
                fill currentColor

blockquote
    color #828282
    border-left 4px solid $borders
    padding-left 15px
    font-size 18px
    letter-spacing -1px
    font-style italic
    & > :last-child
        margin-bottom 0

pre,
code
    font-size 15px
    border 1px solid $borders
    border-radius 3px
    background-color #eef

code
    padding 1px 5px

pre
    padding 8px 12px
    overflow-x auto
    & > code
        border 0
        padding-right 0
        padding-left 0

.wrapper
    max-width -webkit-calc(800px - (30px))
    max-width calc(800px - (30px))
    margin-right auto
    margin-left auto
    padding-right 15px
    padding-left 15px

@media screen and (min-width: 800px)
    .wrapper
        max-width -webkit-calc(800px - (30px * 2))
        max-width calc(800px - (30px * 2))
        padding-right 30px
        padding-left 30px

.footer-col-wrapper:after, .wrapper:after
    content ""
    display table
    clear both

.orange
    color #f66a0a

.grey
    color #828282

.svg-icon
    width 16px
    height 16px
    display inline-block
    fill currentColor
    padding 5px 3px 2px 5px
    vertical-align text-bottom

table
    margin-bottom 30px
    width 100%
    text-align left
    color #3f3f3f
    border-collapse collapse
    border 1px solid $borders
    tr
        &:nth-child(even)
            background-color #f7f7f7
    th
        background-color #f0f0f0
        border 1px solid #dedede
        border-bottom-color #c9c9c9
    td
        border 1px solid $borders

table th, table td
    padding 10px 15px

.site-header
    //border-top 5px solid #424242
    border-top 5px solid $title
    border-bottom 1px solid $title
    min-height 55.95px
    line-height 54px
    position relative

.site-title, .site-title:visited
    color $title

.site-title
    font-size 26px
    font-weight 300
    letter-spacing -1px
    margin-bottom 0
    float left

@media screen and (max-width: 600px)
    .site-title
        padding-right 45px


.site-nav
    position absolute
    top 9px
    right 15px
    background-color #fdfdfd
    border 1px solid $borders
    border-radius 5px
    text-align right
    .nav-trigger
        display none
    .menu-icon
        float right
        width 36px
        height 26px
        line-height 0
        padding-top 10px
        text-align center
        & > svg
            path
                fill #424242
    label[for=nav-trigger]
        display block
        float right
        width 36px
        height 36px
        z-index 2
        cursor pointer
    input
        & ~ .trigger
            clear both
            display none
        &:checked
            & ~ .trigger
                display block
                padding-bottom 5px
    .page-link
        color $links
        line-height 1.5
        display block
        padding 5px 10px
        margin-left 20px
        &:not(:last-child)
            margin-right 0

@media screen and (min-width: 600px)
    .site-nav
        position static
        float right
        border none
        background-color inherit
        label[for=nav-trigger]
            display none
        .menu-icon
            display none
        input
            & ~ .trigger
                display block
        .page-link
            display inline
            padding 0
            margin-left auto
            &:not(:last-child)
                margin-right 20px

.pagination
    margin-bottom 25px
    font-size 0.875rem

.pagination .next-link, .pagination .prev-link
    border 1px solid $borders
    padding 5px 10px
    color $borders

.site-footer
    border-top 1px solid $borders
    padding 30px 0

.footer-heading
    font-size 18px
    margin-bottom 15px

.contact-list,
.social-media-list
    list-style none
    margin-left 0

.footer-col-wrapper
    font-size 15px
    color #828282
    margin-left -15px

.footer-col
    width -webkit-calc(100% - (30px / 2))
    width calc(100% - (30px / 2))
    margin-bottom 15px
    padding-left 15px

.footer-col-1,
.footer-col-2
    width -webkit-calc(50% - (30px / 2))
    width calc(50% - (30px / 2))

.footer-col-3
    width -webkit-calc(100% - (30px / 2))
    width calc(100% - (30px / 2))

@media screen and (min-width: 800px)
    .footer-col-1
        width -webkit-calc(35% - (30px / 2))
        width calc(35% - (30px / 2))
    .footer-col-2
        width -webkit-calc(20% - (30px / 2))
        width calc(20% - (30px / 2))
    .footer-col-3
        width -webkit-calc(45% - (30px / 2))
        width calc(45% - (30px / 2))

@media screen and (min-width: 600px)
    .footer-col
        float left

.page-content
    padding 30px 0
    flex 1 0 auto

.page-heading
    font-size 32px

.post-list-heading
    font-size 28px

.post-list
    margin-left 0
    list-style none
    & > li
        margin-bottom 30px

.post-meta
    font-size 14px
    color #828282

.post-link
    display block
    //font-size 24px
    &:hover
        background: rgba($blue, 0.2)


.post-header
    margin-bottom 30px

.post-title,
.post-content h1
    font-size 42px
    letter-spacing -1px
    line-height 1

//.post-title,
@media screen and (min-width: 800px) 
  .post-content h1
    font-size 42px

.post-content
    margin-bottom 30px
    h2
        font-size 28px
    h3
        font-size 22px
    h4
        font-size 18px

@media screen and (min-width: 800px)
    .post-content
        h2
            font-size 32px

@media screen and (min-width: 800px)
    .post-content
        h3
            font-size 26px

@media screen and (min-width: 800px)
    .post-content
        h4
            font-size 20px

.one-half
    width -webkit-calc(50% - (30px / 2))
    width calc(50% - (30px / 2))

.next-party-box
    border: 8px solid $borders
    border-radius: 4px
    padding: 8px 20px
    background: #111
    margin: 0 0 30px 0
    h2
        color: $pink !important
        margin-bottom: 0

.party-listing
    h3
        margin-bottom: 0px

</style>

<template>  
    <Wrap :page="page">
        <div class="home">
            <h1 class="page-heading" v-if="page.title">{{ page.title }}</h1>

            <slot name="default"></slot>

            <!-- Next Party - Save The Date --> 
            <div v-if="page.posts[0].createdAt > new Date()" class="next-party-box party-listing">
                <saber-link
                    class="post-link-foo"
                    :to="page.posts[0].permalink"
                >
                    <h2 class="post-list-heading">&gt;&gt;&gt; Next Party &lt;&lt;&lt;</h2>
                    <h3>{{ page.posts[0].title }}</h3>
                    <span class="post-meta">{{ formatDate(page.posts[0].createdAt) }}</span>
                    <span class="post-meta">@ {{ page.posts[0].location }}</span>
                </saber-link>
            </div>
            
            <img alt="First Thursday of the month at Zum bömischen Dorf" src="/cc_header.png">

            <h2
                class="post-list-heading"
                v-if="page.posts && page.posts.length > 0"
            >{{ page.listTitle || 'Past Parties' }}</h2>
            
            <ul class="post-list" v-if="page.posts && page.posts.length > 0">
                <li v-for="post in page.posts" :key="post.permalink" v-if="post.createdAt < new Date()">
                    <saber-link
                        class="post-link party-listing"
                        :to="post.permalink"
                    >
                        <h3>{{ post.title }}</h3>
                        <span class="post-meta">{{ formatDate(post.createdAt) }}</span>
                        <span class="post-meta">@ {{ post.location }}</span>
                    </saber-link>
                </li>
            </ul>

            <div
                class="pagination"
                v-if="page.pagination && (page.pagination.hasNext || page.pagination.hasPrev)"
            >
                <router-link
                    class="prev-link"
                    :to="page.pagination.prevLink"
                    v-if="page.pagination.hasPrev"
                >← Previous</router-link>
                <router-link
                    class="next-link"
                    :to="page.pagination.nextLink"
                    v-if="page.pagination.hasNext"
                >Next →</router-link>
            </div>

            <!--p class="feed-subscribe" v-if="feedLink">
                <svg class="svg-icon orange">
                    <use :xlink:href="getSvg('rss')"></use>
                </svg>
                <a :href="feedLink">Subscribe</a>
            </p-->
        </div>
    </Wrap>
</template>

<script>
import formatDate from '../utils/formatDate';
import Wrap from '../components/Wrap.vue';
import getSvg from '../utils/getSvg';
export default {
    components: {
        Wrap: Wrap
    },
    props: ['page'],
    computed: {
        feedLink: function feedLink() {
            return this.$feed && this.$feed.permalink;
        }
    },
    methods: {
        formatDate: formatDate,
        getSvg: getSvg
    }
};
</script>