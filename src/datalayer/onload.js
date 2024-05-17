import _ from 'lodash'
import dl from './state'

function onLoad() {
    const checkUser = async () => {
        var userToken = dl.functions.common.getCookie('userToken')
        // alert(userToken)
        var baseUrl = process.env.BASE_URL
        // console.log(baseUrl)
        if (userToken != null) {
            dl.changes.userDetail.buttonsVisible = 'none'
            dl.changes.userDetail.profileVisible = 'flex'
            dl.changes.userDetail.addressVisible = 'flex'
            dl.changes.isUserSignedIn = true
        } else {
            dl.changes.userDetail.buttonsVisible = 'flex'
            dl.changes.userDetail.profileVisible = 'none'
            dl.changes.userDetail.addressVisible = 'none'
            dl.changes.isUserSignedIn = false
        }
    }
    dl.functions.checkUser = checkUser
    const formattedDate = (date) =>
        `${date.getDate()} ${date.toLocaleString('default', {
            month: 'short',
        })} ${date.getFullYear()}`

    const changeAddress = async (body) => {
        var myHeaders = new Headers()
        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)
        myHeaders.append('Content-Type', 'application/json')

        var raw = JSON.stringify(body)

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
        }

        try {
            dl.functions.modalsPlugin.openModal('loading')
            var baseUrl = process.env.BASE_URL
            const response = await fetch(
                // 'https://melody-mocktail-6tjz.api.neutrodev.com/user/update',
                `${baseUrl}/user/update`,
                requestOptions
            )
            if (response.status == 200) {
                var currentPath = dl.functions.common.getLastPath()
                dl.functions.onLoadFunctions[currentPath]()
            }
            const res = await response.json()
            dl.functions.modalsPlugin.closeModal('loading')

            return { status: response.status, result: res }
        } catch (err) {
            return err
        }
    }

    dl.functions.changeAddress = changeAddress

    const updateFirstLastName = async (body) => {
        var myHeaders = new Headers()
        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)
        myHeaders.append('Content-Type', 'application/json')

        var raw = JSON.stringify(body)

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
        }

        try {
            var baseUrl = process.env.BASE_URL
            dl.functions.modalsPlugin.openModal('loading')
            const response = await fetch(
                // 'https://melody-mocktail-6tjz.api.neutrodev.com/user/update',
                `${baseUrl}/user/update`,
                requestOptions
            )
            const res = await response.json()
            dl.functions.modalsPlugin.closeModal('loading')

            return { status: response.status, result: res }
        } catch (err) {
            return err
        }
    }
    dl.functions.updateFirstLastName = updateFirstLastName

    const updateProfileImage = async (body) => {
        var myHeaders = new Headers()
        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)
        myHeaders.append('Content-Type', 'application/json')

        var raw = JSON.stringify(body)

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
        }

        try {
            var baseUrl = process.env.BASE_URL
            dl.functions.modalsPlugin.openModal('loading')
            const response = await fetch(
                // 'https://melody-mocktail-6tjz.api.neutrodev.com/user/update',
                `${baseUrl}/user/update`,
                requestOptions
            )
            const res = await response.json()
            dl.functions.modalsPlugin.closeModal('loading')

            return { status: response.status, result: res }
        } catch (err) {
            return err
        }
    }
    dl.functions.updateProfileImage = updateProfileImage

    const requestOtp = async (userDetails) => {
        var myHeaders = new Headers()
        // myHeaders.append('apikey', 'OdocRewT1nf/GhB3RCq1Xg==')
        myHeaders.append('Content-Type', 'application/json')

        var raw = JSON.stringify(userDetails)

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
        }

        try {
            dl.functions.modalsPlugin.openModal('loading')
            const response = await fetch(
                'https://auth.melodymocktail.com/auth/signup',
                requestOptions
            )
            const res = await response.json()
            dl.functions.modalsPlugin.closeModal('loading')

            return res
        } catch (err) {
            console.error(err)
            return err
        }
    }
    dl.functions.requestOtp = requestOtp

    const otpVerify = async (otpdetail) => {
        var myHeaders = new Headers()
        // myHeaders.append('apiKey', 'OdocRewT1nf/GhB3RCq1Xg==')
        myHeaders.append('Content-Type', 'application/json')

        var raw = JSON.stringify(otpdetail)

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
        }

        try {
            dl.functions.modalsPlugin.openModal('loading')
            const response = await fetch(
                // 'https://services.neutrodev.com/users/validate',
                'https://auth.melodymocktail.com/auth/verifyOtp',
                requestOptions
            )
            const res = await response.json()
            dl.functions.modalsPlugin.closeModal('loading')
            if (response.status != 200) {
                return false
            }

            return res
        } catch (err) {
            console.error(err)
            return false
        }
    }

    dl.functions.otpVerify = otpVerify

    const registerUser = async (token, userData) => {
        var myHeaders = new Headers()
        myHeaders.append('Content-Type', 'application/json')

        var body = {
            token: token,
            userData: userData,
        }

        var raw = JSON.stringify(body)

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
        }

        try {
            var baseUrl = process.env.BASE_URL
            dl.functions.modalsPlugin.openModal('loading')
            const response = await fetch(
                // 'https://melody-mocktail-6tjz.api.neutrodev.com/admin/signup',
                `${baseUrl}/admin/signup`,
                requestOptions
            )
            const res = await response.json()
            dl.functions.modalsPlugin.closeModal('loading')

            return res
        } catch (err) {
            console.error(err)
            return err
        }
    }

    dl.functions.registerUser = registerUser

    const validateAndSignup = async (otpName) => {
        if (dl.changes.userDetails.countryCode.length < 1) {
            dl.changes.errormessage =
                'Please select the Country Code for Phone Number'
            return
        }

        var userDetails = {
            firstname: dl.changes.userDetails.firstName,
            lastname: dl.changes.userDetails.lastName,
            // name:
            //     dl.changes.userDetails.firstName +
            //     ' ' +
            //     dl.changes.userDetails.lastName,
            email: dl.changes.userDetails.email,
            phonenumber:
                dl.changes.userDetails.countryCode +
                dl.changes.userDetails.phone,
            // validation: 'phone',
            // type: 'main',
        }

        if (dl.changes.userDetails.firstName < 2) {
            dl.changes.errormessage = 'First Name is needed'
        } else if (dl.changes.userDetails.lastName.length < 1) {
            dl.changes.errormessage = 'Last Name is needed'
        } else if (userDetails.email.length < 1) {
            dl.changes.errormessage = 'Email is needed'
        } else if (userDetails.phonenumber.length < 10) {
            dl.changes.errormessage = 'Phone should contain 10 digits'
        } else {
            dl.changes.errormessage = ''
            var res = await dl.functions.requestOtp(userDetails)
            if (res.message) {
                if (res.message) {
                    dl.changes.errormessage = res.message
                }
                return
            }
            dl.changes.validationId = res.data.mode

            dl.changes.otpPopupMessage = `we have just sent a verification code to ${userDetails.phonenumber}`
            dl.functions.modalsPlugin.openModal(otpName)
            dl.changes.loginFlow = false
            dl.changes.validOtp = ''
            dl.changes.showResend = 'none'
            dl.changes.showTimer = 'flex'
            var interval = setInterval(function () {
                if (dl.changes.countDown == 0) {
                    clearInterval(interval)
                    dl.changes.showResend = 'flex'
                    dl.changes.showTimer = 'none'
                    dl.changes.countDown = 60
                } else {
                    dl.changes.countDown = dl.changes.countDown - 1
                }
            }, 1000)
        }
    }

    dl.functions.validateAndSignup = validateAndSignup

    const getUserDetail = async () => {
        var myHeaders = new Headers()
        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow',
        }

        try {
            dl.functions.modalsPlugin.openModal('loading')
            var baseUrl = process.env.BASE_URL
            const response = await fetch(
                // 'https://melody-mocktail-6tjz.api.neutrodev.com/userDetail',
                `${baseUrl}/userDetail`,
                requestOptions
            )

            if (response.status == 401) {
                // dl.changes.isUserSignedIn = false

                dl.changes.userDetail.name = ''
                dl.changes.userDetail.profileName = ''
                dl.changes.userDetail.firstName = ''

                dl.changes.userDetail.lastName = ''

                dl.changes.userDetail.phone = ''
                dl.changes.userDetail.email = ''
                dl.changes.userDetail.address = 'Address'

                dl.changes.userDetail.userId = ''
                dl.changes.userDetail.profilePic =
                    'url(https://isobarscience-1bfd8.kxcdn.com/wp-content/uploads/2020/09/default-profile-picture1.jpg)'
                dl.changes.userDetail.buttonsVisible = 'flex'
                dl.changes.userDetail.profileVisible = 'none'
                dl.changes.userDetail.addressVisible = 'none'
                dl.changes.userDetail.otherServicesVisible = 'none'
                dl.functions.modalsPlugin.closeModal('loading')
                return
            }
            const res = await response.json()
            var fullname = res[0].name.split(' ')
            dl.changes.userDetail.name = fullname[0]
            dl.changes.userDetail.profileName = res[0].name
            dl.changes.userDetail.firstName = res[0].firstName
                ? res[0].firstName
                : fullname[0]
            dl.changes.userDetail.lastName = res[0].lastName
                ? res[0].lastName
                : ''
            dl.changes.userDetail.phone = res[0].phone
            dl.changes.userDetail.email = res[0].email

            if (res[0].address) {
                dl.changes.userDetail.address =
                    res[0].address.city +
                    ', ' +
                    res[0].address.state +
                    ', ' +
                    res[0].address.country
            }
            dl.changes.userDetail.userId = res[0]._id
            dl.changes.userDetail.profilePic = res[0].profilePic[0]
                ? 'url(' + res[0].profilePic[0].url + ')'
                : ''
            dl.changes.userDetail['zipCode'] = res[0].address.zipCode
            dl.changes.userDetail['status'] = res[0].status
            dl.functions.modalsPlugin.closeModal('loading')
            return res
        } catch (err) {
            console.error(err)
            return err
        }
    }
    dl.functions.getUserDetail = getUserDetail

    const getAddress = async (zipCode) => {
        var myHeaders = new Headers()
        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow',
        }

        try {
            if (zipCode.length < 5) {
                dl.changes.addressString = 'No addresss Found'
                return
            }
            dl.functions.modalsPlugin.openModal('loading')
            var baseUrl = process.env.BASE_URL
            const response = await fetch(
                // `https://melody-mocktail-6tjz.api.neutrodev.com/user/zipcode?zipCode=${zipCode}`,
                `${baseUrl}/user/zipcode?zipCode=${zipCode}`,
                requestOptions
            )
            const res = await response.json()
            dl.functions.modalsPlugin.closeModal('loading')

            if (response.status == 200 && res.length > 0) {
                dl.changes.userAddress.address.city = res[0].city
                dl.changes.userAddress.address.state = res[0].state_name
                dl.changes.userAddress.address.country = 'United States'
                dl.changes.addressString =
                    res[0].city +
                    ', ' +
                    res[0].state_name +
                    ', ' +
                    dl.changes.userAddress.address.country
            } else {
                dl.changes.addressString = 'No addresss Found'
            }

            return res
        } catch (err) {
            console.error(err)
            return err
        }
    }
    dl.functions.getAddress = getAddress

    const getBlogs = async (
        limit,
        query,
        page,
        updatePagination = true,
        isPin = false
    ) => {
        var myHeaders = new Headers()

        // var userToken = dl.functions.common.getCookie('userToken')
        // myHeaders.append('Authorization', userToken)
        var filterQuery =
            dl.changes.blogQuery.length > 0 ? dl.changes.blogQuery : ''

        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
        }

        if (userToken) {
            requestOptions.headers = myHeaders
        }

        try {
            dl.functions.modalsPlugin.openModal('loading')
            var baseUrl = 'https://cms.digitalmocktails.com'
            const response = await fetch(
                // `https://melody-mocktail-6tjz.api.neutrodev.com/user/blogs?category=${type}&page=${page}&limit=${limit}&isPin=${isPin}`,
                `${baseUrl}/api/blogs?populate=*&sort[0]=publishedAt:desc&pagination[page]=${page}&pagination[pageSize]=${limit}${filterQuery}`,
                requestOptions
            )
            const res = await response.json()
            var blogs = res.data
            dl.functions.modalsPlugin.closeModal('loading')
            const formattedDate = (date) =>
                `${date.toLocaleString('default', {
                    month: 'short',
                })} ${date.getDate()} ${date.getFullYear()}`
            dl.changes.paginationState.total = res.meta.pagination.pageCount
            dl.changes.paginationState.active = res.meta.pagination.page
            var result = []
            for (var i = 0; i < blogs.length; i++) {
                var description = dl.functions.common.stripHtml(
                    blogs[i].attributes.Content_1
                )

                var date = formattedDate(
                    new Date(blogs[i].attributes.publishedAt)
                )

                var img = ''

                if (blogs[i].attributes.Main_Image.data.attributes.url) {
                    img = `url(${
                        baseUrl +
                        blogs[i].attributes.Main_Image.data.attributes.url
                    })`
                }
                var obj = {
                    _id: blogs[i].id,
                    description: description.substring(0, 70) + '....',
                    title: blogs[i].attributes.Title.substring(0, 35) + ' ..',

                    imageurl: img,
                    date: date,
                    bookmarkactive: 'none',
                    bookmarkinactive: 'flex',
                }

                result.push(obj)

                // var description = dl.functions.common.stripHtml(
                //     res.result[i].description.html
                // )
                // res.result[i]['description'] =
                //     description.substring(0, 60) + '....'
                // res.result[i]['title'] =
                //     res.result[i].title.substring(0, 20) + ' ..'
                // if (res.result[i].isBookmarked == true) {
                //     res.result[i]['bookmarkactive'] = 'flex'
                //     res.result[i]['bookmarkinactive'] = 'none'
                // } else {
                //     res.result[i]['bookmarkactive'] = 'none'
                //     res.result[i]['bookmarkinactive'] = 'flex'
                // }
                // res.result[i]['imageurl'] = res.result[i].image
                //     ? 'url(' + res.result[i].image.url + ')'
                //     : 'url(https://images.unsplash.com/photo-1682832919420-b2aca69e6ebc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60)'
                // res.result[i]['date'] = formattedDate(
                //     new Date(res.result[i]['cOn'])
                // )
            }
            return { status: response.status, result: result }
        } catch (err) {
            return err
        }
    }
    dl.functions.getBlogs = getBlogs

    const getHomeBlog = async () => {
        dl.changes.blogQuery = '&filters[Pinned][$eq]=true'
        var response = await dl.functions.getBlogs('3', '', '1', false, true)
        // alert(JSON.stringify(response))
        var res = response.result
        console.log(res)
        // alert(JSON.stringify(res))
        dl.changes.blogsHome.blog1 = {
            _id: res[0]._id,
            title: res[0].title,
            description: res[0].description,
            date: res[0].date,
            bookmarkactive: res[0].bookmarkactive,
            bookmarkinactive: res[0].bookmarkinactive,
            imageurl: res[0].imageurl,
        }
        dl.changes.blogsHome.blog2 = {
            _id: res[1]._id,
            title: res[1].title,
            description: res[1].description,
            date: res[1].date,
            bookmarkactive: res[1].bookmarkactive,
            bookmarkinactive: res[1].bookmarkinactive,
            imageurl: res[1].imageurl,
        }
        dl.changes.blogsHome.blog3 = {
            _id: res[2]._id,
            title: res[2].title,
            description: res[2].description,
            date: res[2].date,
            bookmarkactive: res[2].bookmarkactive,
            bookmarkinactive: res[2].bookmarkinactive,
            imageurl: res[2].imageurl,
        }
        dl.changes.blogQuery = ''
    }
    dl.functions.getHomeBlog = getHomeBlog

    const getTravelBlogs = async (limit, page) => {
        var myHeaders = new Headers()

        // var userToken = dl.functions.common.getCookie('userToken')
        // myHeaders.append('Authorization', userToken)

        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
        }

        if (userToken) {
            requestOptions.headers = myHeaders
        }
        const formattedDate = (date) =>
            ` ${date.toLocaleString('default', {
                month: 'short',
            })} ${date.getDate()} ${date.getFullYear()}`

        try {
            dl.functions.modalsPlugin.openModal('loading')
            dl.changes.blogQuery =
                '&filters[categories][Title][$eqi]=Travel%20Blog'
            var response = await dl.functions.getBlogs(
                '3',
                '',
                '1',
                false,
                true
            )
            // alert(JSON.stringify(response))
            var res = response.result
            // var baseUrl = process.env.BASE_URL
            // const response = await fetch(
            //     // `https://melody-mocktail-6tjz.api.neutrodev.com/user/blogs?category=Travel %26 Adventure&limit=${limit}&page=${page}`,
            //     `${baseUrl}/user/blogs?category=Travel %26 Adventure&limit=${limit}&page=${page}`,
            //     requestOptions
            // )
            // const res = await response.json()
            dl.functions.modalsPlugin.closeModal('loading')
            // dl.changes.paginationState.total = res.totalPage
            // dl.changes.paginationState.active = Number(page)
            // // alert(JSON.stringify(res))
            // for (var i = 0; i < res.result.length; i++) {
            //     // var desc = JSON.stringify(res.result[i].description.html)
            //     var description = dl.functions.common.stripHtml(
            //         res.result[i].description.html
            //     )
            //     res.result[i]['description'] =
            //         description.substring(0, 60) + '....'
            //     res.result[i]['title'] =
            //         res.result[i].title.substring(0, 20) + ' ..'
            //     if (res.result[i].isBookmarked == true) {
            //         res.result[i]['bookmarkactive'] = 'flex'
            //         res.result[i]['bookmarkinactive'] = 'none'
            //     } else {
            //         res.result[i]['bookmarkactive'] = 'none'
            //         res.result[i]['bookmarkinactive'] = 'flex'
            //     }

            //     res.result[i]['imageurl'] = res.result[i].image
            //         ? 'url(' + res.result[i].image.url + ')'
            //         : 'url(https://images.unsplash.com/photo-1682832919420-b2aca69e6ebc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60)'
            //     res.result[i]['date'] = formattedDate(
            //         new Date(res.result[i]['cOn'])
            //     )
            // }
            dl.changes.travelBlogsList = res
            dl.changes.blogQuery = ''
            return { status: response.status, result: res }
        } catch (err) {
            return err
        }
    }
    dl.functions.getTravelBlogs = getTravelBlogs

    const getMovieSuggestrion = async (limit, page) => {
        var myHeaders = new Headers()

        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)

        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
        }

        if (userToken) {
            requestOptions.headers = myHeaders
        }

        try {
            dl.functions.modalsPlugin.openModal('loading')
            var baseUrl = process.env.BASE_URL
            const response = await fetch(
                // `https://melody-mocktail-6tjz.api.neutrodev.com/user/movieSuggestion?limit=${limit}&page=${page}`,
                `${baseUrl}/user/movieSuggestion?limit=${limit}&page=${page}`,
                requestOptions
            )
            const res = await response.json()
            dl.functions.modalsPlugin.closeModal('loading')

            dl.changes.paginationState.total = res.totalpage
            dl.changes.paginationState.active = Number(page)
            // alert(JSON.stringify(res))
            for (var i = 0; i < res.result.length; i++) {
                if (res.result[i].isBookmarked == true) {
                    res.result[i]['bookmarkactive'] = 'flex'
                    res.result[i]['bookmarkinactive'] = 'none'
                } else {
                    res.result[i]['bookmarkactive'] = 'none'
                    res.result[i]['bookmarkinactive'] = 'flex'
                }

                res.result[i]['title'] =
                    res.result[i].title.substring(0, 20) + ' ..'
                res.result[i]['imageurl'] = res.result[i].image
                    ? 'url(' + res.result[i].image.url + ')'
                    : 'url(https://images.unsplash.com/photo-1682832919420-b2aca69e6ebc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60)'
                for (var j = 0; j < 6; j++) {
                    var objname = 'availableOn_' + String(j + 1)
                    // alert(JSON.stringify("1"))``
                    if (res.result[i].availableOn[j]) {
                        res.result[i][objname] = dl.changes.moviesAvailableOn[
                            res.result[i].availableOn[j]
                        ]
                            ? dl.changes.moviesAvailableOn[
                                  res.result[i].availableOn[j]
                              ]
                            : 'http://placehold.it/500x500'
                    } else {
                        res.result[i][objname] = ''
                    }
                }

                res.result[i]['ratingProps'] = {
                    readOnly: true,
                    color: 'rgba(186,15,23,1)',
                    size: 15,
                    rating: Number(res.result[i].rating),
                    max: 5,
                }
            }
            dl.changes.movieSuggestionList = res.result
            // alert(JSON.stringify(dl.changes.movieSuggestionList))
            return { status: response.status, result: res }
        } catch (err) {
            return err
        }
    }

    dl.functions.getMovieSuggestrion = getMovieSuggestrion

    const getMOvieBlogs = async () => {
        dl.changes.blogQuery = ''
        var response = await dl.functions.getBlogs('3', 'Movies', '1', false)
        var res = response.result
        dl.changes.moviesBlogList.blog1 = {
            _id: res[0]._id,
            title: res[0].title,
            description: res[0].description,
            date: res[0].date,
            bookmarkactive: res[0].bookmarkactive,
            bookmarkinactive: res[0].bookmarkinactive,
            imageurl: res[0].imageurl,
        }
        dl.changes.moviesBlogList.blog2 = {
            _id: res[1]._id,
            title: res[1].title,
            description: res[1].description,
            date: res[1].date,
            bookmarkactive: res[1].bookmarkactive,
            bookmarkinactive: res[1].bookmarkinactive,
            imageurl: res[1].imageurl,
        }
        dl.changes.moviesBlogList.blog3 = {
            _id: res[2]._id,
            title: res[2].title,
            description: res[2].description,
            date: res[2].date,
            bookmarkactive: res[2].bookmarkactive,
            bookmarkinactive: res[2].bookmarkinactive,
            imageurl: res[2].imageurl,
        }
        dl.changes.blogQuery = ''
    }
    dl.functions.getMOvieBlogs = getMOvieBlogs

    const getOtpLogin = async (body, otpName) => {
        var myHeaders = new Headers()
        // myHeaders.append('apikey', 'OdocRewT1nf/GhB3RCq1Xg==')
        myHeaders.append('Content-Type', 'application/json')

        var raw = JSON.stringify(body)

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
        }

        try {
            dl.functions.modalsPlugin.openModal('loading')
            const response = await fetch(
                // 'https://services.neutrodev.com/users/otp',
                'https://auth.melodymocktail.com/auth/login',
                requestOptions
            )
            const res = await response.json()
            dl.functions.modalsPlugin.closeModal('loading')

            // dl.changes.logInOtpDetail.validationId = res.mode
            // alert(JSON.stringify(res))
            if (res.message) {
                dl.changes.logInErrMessage = 'Invalid phone'
                return
            }
            if (response.status == 200) {
                dl.changes.otpPopupMessage = `we have just sent a verification code to ${body.phonenumber}`
                dl.functions.modalsPlugin.openModal(otpName)
                dl.changes.loginFlow = true
                dl.changes.validOtp = ''
                dl.changes.showResend = 'none'
                dl.changes.showTimer = 'flex'

                dl.changes.validationId = res.mode
                dl.changes.userDetails.firstName = res.data.firstname
                dl.changes.userDetails.lastName = res.data.lastname
                dl.changes.userDetails.email = res.data.email
                // dl.changes.userDetails.phone =

                var interval = setInterval(function () {
                    if (dl.changes.countDown == 0) {
                        clearInterval(interval)
                        dl.changes.showResend = 'flex'
                        dl.changes.showTimer = 'none'
                        dl.changes.countDown = 60
                        // console.log(dl.changes.countDown)
                    } else {
                        dl.changes.countDown = dl.changes.countDown - 1
                    }
                }, 1000)
            }
        } catch (err) {
            // alert(err)
            return err
        }
    }

    dl.functions.getOtpLogin = getOtpLogin

    const loginUser = async (body) => {
        var myHeaders = new Headers()
        // myHeaders.append('apiKey', 'OdocRewT1nf/GhB3RCq1Xg==')
        myHeaders.append('Content-Type', 'application/json')

        var raw = JSON.stringify(body)

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
        }

        try {
            dl.functions.modalsPlugin.openModal('loading')
            const response = await fetch(
                // 'https://services.neutrodev.com/users/login',
                'https://auth.melodymocktail.com/auth/verifyOtp',
                requestOptions
            )

            const res = await response.json()
            dl.functions.modalsPlugin.closeModal('loading')
            // alert(JSON.stringify(res))
            return { status: response.status, result: res }
        } catch (err) {
            return err
        }
    }
    dl.functions.loginUser = loginUser

    const getMovieDetails = async (movieId) => {
        var myHeaders = new Headers()
        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow',
        }

        try {
            dl.functions.modalsPlugin.openModal('loading')
            var baseUrl = process.env.BASE_URL
            const response = await fetch(
                // `https://melody-mocktail-6tjz.api.neutrodev.com/user/movieDetail?movieId=${movieId}`,
                `${baseUrl}/user/movieDetail?movieId=${movieId}`,
                requestOptions
            )
            const res = await response.json()
            dl.functions.modalsPlugin.closeModal('loading')

            res[0]['imageurl'] = res[0].image
                ? 'url(' + res[0].image.url + ')'
                : 'url(https://images.unsplash.com/photo-1682832919420-b2aca69e6ebc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60)'
            for (var j = 0; j < 6; j++) {
                var objname = 'availableOn_' + String(j + 1)
                // alert(JSON.stringify("1"))
                if (res[0].availableOn[j]) {
                    res[0][objname] = dl.changes.moviesAvailableOn[
                        res[0].availableOn[j]
                    ]
                        ? dl.changes.moviesAvailableOn[res[0].availableOn[j]]
                        : ''
                } else {
                    res[0][objname] = ''
                }
            }

            res[0]['ratingProps'] = {
                readOnly: true,
                color: 'rgba(186,15,23,1)',
                size: 15,
                rating: Number(res[0].rating),
                max: 5,
            }
            dl.changes.movieDetail = res[0]
            // alert(JSON.stringify(dl.changes.movieDetail))
        } catch (err) {
            return err
        }
    }
    dl.functions.getMovieDetails = getMovieDetails

    const getBlogDetail = async (blogId) => {
        var myHeaders = new Headers()
        // var userToken = dl.functions.common.getCookie('userToken')
        // myHeaders.append('Authorization', userToken)

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow',
        }

        // blogId = 2

        try {
            dl.functions.modalsPlugin.openModal('loading')
            var baseUrl = 'https://cms.digitalmocktails.com'
            const response = await fetch(
                // `https://melody-mocktail-6tjz.api.neutrodev.com/user/blogDetail?blogId=${blogId}`,
                `${baseUrl}/api/blogs/${blogId}?populate=*`,
                requestOptions
            )
            const res = await response.json()
            // const formattedDate = (date) =>
            //     `${date.getDate()} ${date.toLocaleString('default', {
            //         month: 'short',
            //     })} ${date.getFullYear()}`

            var blogData = res.data

            dl.changes.blogDetail.title = blogData.attributes.Title
            if (blogData.attributes.Title_Image.data.attributes.url) {
                dl.changes.blogDetail['titleImage'] =
                    baseUrl +
                    blogData.attributes.Title_Image.data.attributes.url
            } else {
                dl.changes.blogDetail['titleImage'] = ''
            }

            if (blogData.attributes.Main_Image.data.attributes.url) {
                dl.changes.blogDetail['mainImage'] =
                    baseUrl + blogData.attributes.Main_Image.data.attributes.url
            } else {
                dl.changes.blogDetail['mainImage'] = ''
            }

            dl.changes.blogDetail.description = blogData.attributes.Content_1
            dl.changes.blogDetail['banner'] = blogData.attributes.Banner
                ? blogData.attributes.Banner
                : ''

            // if (response.status == 200) {
            //     dl.changes.blogDetail.blogType = res[0].blogType
            //     dl.changes.blogDetail.title = res[0].title
            //     dl.changes.blogDetail.description = res[0].description.html
            //     dl.changes.blogDetail.createdBy = res[0].createdBy
            //     dl.changes.blogDetail.cOn = formattedDate(
            //         new Date(res[0]['cOn'])
            //     )
            // }
            dl.functions.modalsPlugin.closeModal('loading')
        } catch (err) {
            return err
        }
    }
    dl.functions.getBlogDetail = getBlogDetail

    const getBlogComments = async (blogId) => {
        var myHeaders = new Headers()
        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow',
        }

        try {
            dl.functions.modalsPlugin.openModal('loading')
            var baseUrl = process.env.BASE_URL
            const response = await fetch(
                // `https://melody-mocktail-6tjz.api.neutrodev.com/user/blogcomments?blogId=${blogId}`,
                `${baseUrl}/user/blogcomments?blogId=${blogId}`,
                requestOptions
            )

            const res = await response.json()
            var result = []
            if (response.status == 200) {
                for (var i = 0; i < res.length; i++) {
                    var username = ''
                    var deleteButtonVisible = 'none'
                    var reportButtonVisible = 'flex'
                    if (res[i].user._id == dl.changes.userDetail.userId) {
                        username = 'you'
                        deleteButtonVisible = 'flex'
                        reportButtonVisible = 'none'
                    } else {
                        username = res[i].user.name
                        deleteButtonVisible = 'none'
                        reportButtonVisible = 'flex'
                    }

                    var date = new Date(res[i].cOn)
                    var options = {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    }
                    var createdOn = date.toLocaleString(undefined, options)

                    var comments = {
                        name: username,
                        comment: res[i].comment,
                        commentId: res[i]._id,
                        createdOn: createdOn,
                        deleteButtonVisible: deleteButtonVisible,
                        reportButtonVisible: reportButtonVisible,
                        userProfile:
                            res[i].user.profilePic.length > 0
                                ? res[i].user.profilePic[0].url
                                : 'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/CommentUserProfile.png',
                    }
                    result.push(comments)
                    // if(res[i].status=='active'){

                    // }
                }
                dl.changes.blogComments = result
                dl.changes.noOfComments =
                    String(dl.changes.blogComments.length) + ' ' + 'Comments'
                dl.functions.modalsPlugin.closeModal('loading')
                return JSON.stringify(res)
            } else {
                return 'something went wrong'
            }
        } catch (err) {
            return err
        }
    }
    dl.functions.getBlogComments = getBlogComments

    const createBlogComment = async (body) => {
        var myHeaders = new Headers()
        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)
        myHeaders.append('Content-Type', 'application/json')

        var raw = JSON.stringify(body)

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
        }

        try {
            dl.functions.modalsPlugin.openModal('loading')
            var baseUrl = process.env.BASE_URL
            const response = await fetch(
                // 'https://melody-mocktail-6tjz.api.neutrodev.com/user/blogcomments/create',
                `${baseUrl}/user/blogcomments/create`,
                requestOptions
            )
            const res = await response.json()
            dl.functions.modalsPlugin.closeModal('loading')
            if (response.status == 200) {
                dl.changes.newComment = ''
                dl.functions.getBlogComments(body.blogId)
                return response.status
            } else {
                return 'Something went wrong'
            }
        } catch (err) {
            return err
        }
    }
    dl.functions.createBlogComment = createBlogComment

    const deleteBlogComment = async (body) => {
        var myHeaders = new Headers()
        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)
        myHeaders.append('Content-Type', 'application/json')

        var raw = JSON.stringify(body)

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
        }

        try {
            dl.functions.modalsPlugin.openModal('loading')
            var baseUrl = process.env.BASE_URL
            const response = await fetch(
                // 'https://melody-mocktail-6tjz.api.neutrodev.com/user/blogcomments/delete',
                `${baseUrl}/user/blogcomments/delete`,
                requestOptions
            )
            const res = await response.json()

            if (response.status == 200) {
                var params = dl.functions.common.getParams()
                var blogId = params.blogId
                var getBlog = await dl.functions.getBlogComments(blogId)
                dl.functions.modalsPlugin.closeModal('loading')
                return response.status
            } else {
                return 'Something went wrong'
            }
        } catch (err) {
            return err
        }
    }
    dl.functions.deleteBlogComment = deleteBlogComment

    const reportBlogComment = async (body) => {
        var myHeaders = new Headers()
        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)
        myHeaders.append('Content-Type', 'application/json')

        var raw = JSON.stringify(body)

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
        }

        try {
            dl.functions.modalsPlugin.openModal('loading')
            var baseUrl = process.env.BASE_URL
            const response = await fetch(
                // 'https://melody-mocktail-6tjz.api.neutrodev.com/admin/blogcomments/update',
                `${baseUrl}/admin/blogcomments/update`,
                requestOptions
            )
            const res = await response.json()
            dl.functions.modalsPlugin.closeModal('loading')
            if (response.status == 200) {
                return response.status
            } else {
                return 'Something went wrong'
            }
        } catch (err) {
            return err
        }
    }
    dl.functions.reportBlogComment = reportBlogComment

    const getStudyAbroadBlogs = async () => {
        dl.functions.modalsPlugin.openModal('loading')
        var response = await dl.functions.getBlogs(
            '3',
            'Study abroad',
            '1',
            false
        )
        dl.functions.modalsPlugin.closeModal('loading')
        var res = response.result
        var res = res.slice(0, 3)
        dl.changes.studyAbroadBlogs = res
    }
    dl.functions.getStudyAbroadBlogs = getStudyAbroadBlogs

    const getvisaQandABlogs = async () => {
        var response = await dl.functions.getBlogs(
            '3',
            encodeURIComponent('Visa & Immigration'),
            '1',
            false
        )
        var res = response.result
        dl.changes.visaQandABlog.blog1 = {
            _id: res[0]._id,
            title: res[0].title,
            description: res[0].description,
            date: res[0].date,
            bookmarkactive: res[0].bookmarkactive,
            bookmarkinactive: res[0].bookmarkinactive,
            imageurl: res[0].imageurl,
        }
        dl.changes.visaQandABlog.blog2 = {
            _id: res[1]._id,
            title: res[1].title,
            description: res[1].description,
            date: res[1].date,
            bookmarkactive: res[1].bookmarkactive,
            bookmarkinactive: res[1].bookmarkinactive,
            imageurl: res[1].imageurl,
        }
        dl.changes.visaQandABlog.blog3 = {
            _id: res[2]._id,
            title: res[2].title,
            description: res[2].description,
            date: res[2].date,
            bookmarkactive: res[2].bookmarkactive,
            bookmarkinactive: res[2].bookmarkinactive,
            imageurl: res[2].imageurl,
        }
    }
    dl.functions.getvisaQandABlogs = getvisaQandABlogs

    const getvisafaq = async (limit, page) => {
        var myHeaders = new Headers()
        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow',
        }

        try {
            dl.functions.modalsPlugin.openModal('loading')
            var baseUrl = process.env.BASE_URL
            const response = await fetch(
                // `https://melody-mocktail-6tjz.api.neutrodev.com/user/visafaqs?limit=${limit}&page=${page}`,
                `${baseUrl}/user/visafaqs?limit=${limit}&page=${page}`,
                requestOptions
            )
            const res = await response.json()
            dl.functions.modalsPlugin.closeModal('loading')
            dl.changes.paginationState.total = res.totalPage
            dl.changes.paginationState.active = Number(page)
            // alert(JSON.stringify(res))
            if (response.status == 200) {
                var result = res.result
                if (res.result.length == 0) {
                    dl.changes.visaFaqNoDataVisible = 'flex'
                } else {
                    dl.changes.visaFaqNoDataVisible = 'none'
                }
                // alert(JSON.stringify(result))
                for (var i = 0; i < result.length; i++) {
                    result[i]['answerVisible'] = 'none'
                    result[i]['arrowVisible'] = 'flex'
                    // result.push(res[0])
                }
                dl.changes.visafaqs = result
                // alert(JSON.stringify(dl.changes.visafaqs))
            } else {
                return 'Something went wrong'
            }
        } catch (err) {
            return err
        }
    }
    dl.functions.getvisafaq = getvisafaq

    const getvisaQuestions = async (limit, page) => {
        var myHeaders = new Headers()

        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)

        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
        }

        if (userToken) {
            requestOptions.headers = myHeaders
        }

        try {
            dl.functions.modalsPlugin.openModal('loading')
            var baseUrl = process.env.BASE_URL
            const response = await fetch(
                // `https://melody-mocktail-6tjz.api.neutrodev.com/user/visaqandas?page=${page}&limit=${limit}`,
                `${baseUrl}/user/visaqandas?page=${page}&limit=${limit}`,
                requestOptions
            )
            const res = await response.json()
            dl.functions.modalsPlugin.closeModal('loading')
            dl.changes.paginationState.total = res.totalPage
            dl.changes.paginationState.active = Number(page)
            if (response.status == 200) {
                var result = res.result
                if (res.result.length == 0) {
                    dl.changes.visaQuestionNoDataVisible = 'flex'
                } else {
                    dl.changes.visaQuestionNoDataVisible = 'none'
                }
                for (var i = 0; i < result.length; i++) {
                    if (result[i].isBookmarked == true) {
                        result[i]['bookmarkactiveVisible'] = 'flex'
                        result[i]['bookmarkInactiveVisible'] = 'none'
                    } else {
                        result[i]['bookmarkactiveVisible'] = 'none'
                        result[i]['bookmarkInactiveVisible'] = 'flex'
                    }
                    var date = new Date(result[i].cOn)
                    var options = {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    }
                    result[i]['postedOn'] =
                        'Posted on ' + date.toLocaleString(undefined, options)
                    result[i]['commentCount'] =
                        result[i].commentCount + ' ' + 'Comments'
                    result[i]['answered'] = result[i].answered
                }
                dl.changes.visaquestions = result
            } else {
                return 'Something went wrong'
            }
        } catch (err) {
            return err
        }
    }
    dl.functions.getvisaQuestions = getvisaQuestions

    const createVisaQuestion = async (suggestionselected) => {
        var myHeaders = new Headers()
        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)
        myHeaders.append('Content-Type', 'application/json')

        if (suggestionselected) {
            dl.changes.visaQuestionInput.question =
                dl.changes.aiVisaQuestionSuggestionText
        }

        var raw = JSON.stringify(dl.changes.visaQuestionInput)

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
        }

        try {
            dl.functions.modalsPlugin.openModal('loading')
            var baseUrl = process.env.BASE_URL
            const response = await fetch(
                // 'https://melody-mocktail-6tjz.api.neutrodev.com/user/visaqandas/create',
                `${baseUrl}/user/visaqandas/create`,
                requestOptions
            )
            const res = await response.json()
            dl.functions.modalsPlugin.closeModal('loading')
            if (response.status == 200) {
                dl.changes.visaQuestionInput.question = ''
                dl.changes.visaQuestionInput.category = ''
                dl.functions.getvisaQuestions(
                    '10',
                    dl.changes.paginationState.active
                )
                dl.changes.aiVisaQuestionSuggestionText = ''
                dl.changes.showAIoptions = false
                dl.changes.showAILoader = false
                ;(dl.changes.showvisaQuestionSuggestion = false),
                    (dl.changes.showVisaQuestionCreatedSuccess = true)
            }
            return response.status
        } catch (err) {
            return err
        }
    }
    dl.functions.createVisaQuestion = createVisaQuestion

    const searchMovie = async (key) => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
        }

        try {
            dl.functions.modalsPlugin.openModal('loading')
            var baseUrl = process.env.BASE_URL
            const response = await fetch(
                // `https://melody-mocktail-6tjz.api.neutrodev.com/user/movieSuggestion?search=${key}&limit=10`,
                `${baseUrl}/user/movieSuggestion?search=${key}&limit=10`,
                requestOptions
            )
            const res = await response.json()
            dl.functions.modalsPlugin.closeModal('loading')
            if (res.result.length == 0) {
                dl.changes.moviesNoDataVisible = 'flex'
                dl.changes.movieSuggestionList = []
                dl.changes.paginationState.total = 0
                dl.changes.paginationState.active = 0
                return
            } else {
                dl.changes.moviesNoDataVisible = 'none'
            }
            dl.changes.paginationState.total = res.totalpage
            dl.changes.paginationState.active = 1
            // alert(JSON.stringify(res))
            for (var i = 0; i < res.result.length; i++) {
                res.result[i]['bookmarkactive'] = 'none'
                res.result[i]['bookmarkinactive'] = 'flex'
                res.result[i]['title'] =
                    res.result[i].title.substring(0, 25) + ' ..'
                res.result[i]['imageurl'] = res.result[i].image
                    ? 'url(' + res.result[i].image.url + ')'
                    : 'url(https://images.unsplash.com/photo-1682832919420-b2aca69e6ebc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60)'
            }
            dl.changes.movieSuggestionList = res.result
            return { status: response.status, result: res }
        } catch (err) {
            return err
        }
    }
    dl.functions.searchMovie = searchMovie

    const searchTravelSuggestion = async (key) => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
        }

        try {
            dl.functions.modalsPlugin.openModal('loading')
            var response = await dl.functions.getBlogs('12', '', '1')
            // alert(JSON.stringify(response))
            var res = response.result

            // var baseUrl = process.env.BASE_URL
            // const response = await fetch(
            //     // `https://melody-mocktail-6tjz.api.neutrodev.com/user/blogs?category=Travel %26 Adventure&limit=10&search=${key}`,
            //     `${baseUrl}/user/blogs?category=Travel %26 Adventure&limit=10&search=${key}`,
            //     requestOptions
            // )
            // const res = await response.json()
            dl.functions.modalsPlugin.closeModal('loading')
            // if (res.result.length == 0) {
            //     dl.changes.travelNoDataVisible = 'flex'
            //     dl.changes.travelBlogsList = []
            //     dl.changes.paginationState.total = 0
            //     dl.changes.paginationState.active = 0
            //     return
            // } else {
            //     dl.changes.travelNoDataVisible = 'none'
            // }
            // dl.changes.paginationState.total = res.totalPage
            // dl.changes.paginationState.active = 1
            // // alert(JSON.stringify(res))
            // for (var i = 0; i < res.result.length; i++) {
            //     var description = dl.functions.common.stripHtml(
            //         res.result[i].description.html
            //     )
            //     res.result[i]['description'] =
            //         description.substring(0, 60) + '....'
            //     res.result[i]['title'] =
            //         res.result[i].title.substring(0, 20) + ' ..'
            //     res.result[i]['imageurl'] = res.result[i].image
            //         ? 'url(' + res.result[i].image.url + ')'
            //         : 'url(https://images.unsplash.com/photo-1682832919420-b2aca69e6ebc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60)'
            //     res.result[i]['bookmarkactive'] = 'none'
            //     res.result[i]['bookmarkinactive'] = 'flex'
            // }
            dl.changes.travelBlogsList = res
            return { status: response.status, result: res }
        } catch (err) {
            return err
        }
    }
    dl.functions.searchTravelSuggestion = searchTravelSuggestion

    const searchBlog = async (key) => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
        }

        try {
            dl.functions.modalsPlugin.openModal('loading')
            var baseUrl = process.env.BASE_URL
            var response = await dl.functions.getBlogs('12', '', '1')
            // alert(JSON.stringify(response))
            var res = response.result

            // const response = await fetch(
            //     // `https://melody-mocktail-6tjz.api.neutrodev.com/user/blogs?limit=10&search=${key}`,
            //     `${baseUrl}/user/blogs?limit=10&search=${key}`,
            //     requestOptions
            // )
            // const res = await response.json()
            dl.functions.modalsPlugin.closeModal('loading')
            // if (res.result.length == 0) {
            //     dl.changes.blogNoDataVisible = 'flex'
            //     dl.changes.blogsList = []
            //     dl.changes.paginationState.total = 0
            //     dl.changes.paginationState.active = 0
            //     return
            // } else {
            //     dl.changes.blogNoDataVisible = 'none'
            // }
            // dl.changes.paginationState.total = res.totalPage
            // dl.changes.paginationState.active = 1

            // // alert(JSON.stringify(res))
            // for (var i = 0; i < res.result.length; i++) {
            //     var description = dl.functions.common.stripHtml(
            //         res.result[i].description.html
            //     )
            //     res.result[i]['description'] =
            //         description.substring(0, 60) + '....'
            //     res.result[i]['title'] =
            //         res.result[i].title.substring(0, 20) + ' ..'
            //     res.result[i]['bookmarkactive'] = 'none'
            //     res.result[i]['bookmarkinactive'] = 'flex'
            //     res.result[i]['imageurl'] = res.result[i].image
            //         ? 'url(' + res.result[i].image.url + ')'
            //         : 'url(https://images.unsplash.com/photo-1682832919420-b2aca69e6ebc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60)'
            // }
            dl.changes.blogsList = res
            return { status: response.status, result: res }
        } catch (err) {
            return err
        }
    }
    dl.functions.searchBlog = searchBlog

    const applyTravelSuggestionFilter = async () => {
        var filters = {}

        var filterobj = dl.changes.travelSuggestionFilters
        for (var i = 0; i < filterobj.length; i++) {
            var filtername = filterobj[i].filterName
            if (filterobj[i].multi == true) {
                filters[filtername] = []
            }

            var options = filterobj[i].options
            for (var j = 0; j < options.length; j++) {
                if (options[j].selected == true && filterobj[i].multi == true) {
                    filters[filtername].push(options[j].name)
                } else if (
                    options[j].selected == true &&
                    filterobj[i].multi == false
                ) {
                    filters[filtername] = options[j].name
                }
            }
        }
        const formattedDate = (date) =>
            `${date.getDate()} ${date.toLocaleString('default', {
                month: 'short',
            })} ${date.getFullYear()}`

        var myHeaders = new Headers()

        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)

        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
        }

        if (userToken) {
            requestOptions.headers = myHeaders
        }

        try {
            dl.functions.modalsPlugin.openModal('loading')
            var response = await dl.functions.getBlogs('12', '', '1')
            // alert(JSON.stringify(response))
            var res = response.result

            // var travelType = filters.Type ? filters.Type : ''
            // var destination = filters.Destination ? filters.Destination : ''
            // var baseUrl = process.env.BASE_URL
            // destination = encodeURIComponent(destination)
            // const response = await fetch(
            //     // `https://melody-mocktail-6tjz.api.neutrodev.com/user/blogs?destination=${destination}&travelType=${travelType}&limit=9&page=1&category=Travel %26 Adventure`,
            //     `${baseUrl}/user/blogs?destination=${destination}&travelType=${travelType}&limit=9&page=1&category=Travel %26 Adventure`,
            //     requestOptions
            // )
            // const res = await response.json()
            // if (res.result.length == 0) {
            //     dl.changes.travelNoDataVisible = 'flex'
            //     dl.changes.travelBlogsList = []
            //     dl.changes.paginationState.total = 0
            //     dl.changes.paginationState.active = 0
            //     dl.functions.modalsPlugin.closeModal('loading')
            //     return
            // } else {
            //     dl.changes.travelNoDataVisible = 'none'
            // }
            // if (response.status == 200) {
            dl.functions.modalsPlugin.closeModal('loading')
            //     dl.changes.paginationState.total = res.totalPage
            //     dl.changes.paginationState.active = 1
            //     // alert(JSON.stringify(res))
            //     for (var i = 0; i < res.result.length; i++) {
            //         // var desc = JSON.stringify(res.result[i].description.html)
            //         var description = dl.functions.common.stripHtml(
            //             res.result[i].description.html
            //         )
            //         res.result[i]['description'] =
            //             description.substring(0, 60) + '....'
            //         res.result[i]['title'] =
            //             res.result[i].title.substring(0, 25) + ' ..'
            //         if (res.result[i].isBookmarked == true) {
            //             res.result[i]['bookmarkactive'] = 'flex'
            //             res.result[i]['bookmarkinactive'] = 'none'
            //         } else {
            //             res.result[i]['bookmarkactive'] = 'none'
            //             res.result[i]['bookmarkinactive'] = 'flex'
            //         }
            //         res.result[i]['imageurl'] = res.result[i].image
            //             ? 'url(' + res.result[i].image.url + ')'
            //             : 'url(https://images.unsplash.com/photo-1682832919420-b2aca69e6ebc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60)'
            //         res.result[i]['date'] = formattedDate(
            //             new Date(res.result[i]['cOn'])
            //         )
            //     }
            dl.changes.travelBlogsList = res
            // alert(JSON.stringify(dl.changes.travelBlogsList))
            return { status: response.status, result: res }
            // } else {
            //     return 'something went wrong'
            // }
        } catch (err) {
            return err
        }
    }
    dl.functions.applyTravelSuggestionFilter = applyTravelSuggestionFilter

    const applyMovieSuggestionFilter = async () => {
        var filters = {}

        var filterobj = dl.changes.moviesFilter
        for (var i = 0; i < filterobj.length; i++) {
            var filtername = filterobj[i].filterName
            if (filterobj[i].multi == true) {
                filters[filtername] = []
            }

            var options = filterobj[i].options
            for (var j = 0; j < options.length; j++) {
                if (options[j].selected == true && filterobj[i].multi == true) {
                    filters[filtername].push(options[j].name)
                } else if (
                    options[j].selected == true &&
                    filterobj[i].multi == false
                ) {
                    filters[filtername] = options[j].name
                }
            }
        }

        var myHeaders = new Headers()

        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)

        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
        }

        if (userToken) {
            requestOptions.headers = myHeaders
        }

        try {
            dl.functions.modalsPlugin.openModal('loading')
            var type = filters.Type ? filters.Type : ''
            var language = filters.Language ? filters.Language : ''
            var genre = filters.Genre ? filters.Genre : ''
            var ott = filters.OTT ? filters.OTT : ''
            var baseUrl = process.env.BASE_URL
            const response = await fetch(
                // `https://melody-mocktail-6tjz.api.neutrodev.com/user/movieSuggestion?type=${type}&genre=${genre}&language=${language}&ott=${ott}&limit=9&page=1`,
                `${baseUrl}/user/movieSuggestion?type=${type}&genre=${genre}&language=${language}&ott=${ott}&limit=9&page=1`,
                requestOptions
            )
            const res = await response.json()
            if (res.result.length == 0) {
                dl.changes.moviesNoDataVisible = 'flex'
                dl.changes.movieSuggestionList = []
                dl.functions.modalsPlugin.closeModal('loading')

                dl.changes.paginationState.total = 0
                dl.changes.paginationState.active = 0
                return
            } else {
                dl.changes.moviesNoDataVisible = 'none'
            }
            dl.functions.modalsPlugin.closeModal('loading')

            dl.changes.paginationState.total = res.totalpage
            dl.changes.paginationState.active = 1
            // alert(JSON.stringify(res))
            for (var i = 0; i < res.result.length; i++) {
                if (res.result[i].isBookmarked == true) {
                    res.result[i]['bookmarkactive'] = 'flex'
                    res.result[i]['bookmarkinactive'] = 'none'
                } else {
                    res.result[i]['bookmarkactive'] = 'none'
                    res.result[i]['bookmarkinactive'] = 'flex'
                }

                res.result[i]['imageurl'] = res.result[i].image
                    ? 'url(' + res.result[i].image.url + ')'
                    : 'url(https://images.unsplash.com/photo-1682832919420-b2aca69e6ebc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60)'
                res.result[i]['title'] =
                    res.result[i].title.substring(0, 25) + ' ..'
                for (var j = 0; j < 6; j++) {
                    var objname = 'availableOn_' + String(j + 1)
                    // alert(JSON.stringify("1"))
                    if (res.result[i].availableOn[j]) {
                        res.result[i][objname] = dl.changes.moviesAvailableOn[
                            res.result[i].availableOn[j]
                        ]
                            ? dl.changes.moviesAvailableOn[
                                  res.result[i].availableOn[j]
                              ]
                            : ''
                    } else {
                        res.result[i][objname] = ''
                    }
                }
            }
            dl.changes.movieSuggestionList = res.result
            return { status: response.status, result: res }
        } catch (err) {
            return err
        }
    }
    dl.functions.applyMovieSuggestionFilter = applyMovieSuggestionFilter

    const applyBlogFilter = async () => {
        var filters = {}

        var filterobj = dl.changes.blogsFilter
        for (var i = 0; i < filterobj.length; i++) {
            var filtername = filterobj[i].filterName
            if (filterobj[i].multi == true) {
                filters[filtername] = []
            }

            var options = filterobj[i].options
            for (var j = 0; j < options.length; j++) {
                if (options[j].selected == true && filterobj[i].multi == true) {
                    filters[filtername].push(options[j].name)
                } else if (
                    options[j].selected == true &&
                    filterobj[i].multi == false
                ) {
                    filters[filtername] = options[j].name
                }
            }
        }
        var myHeaders = new Headers()

        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)

        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
        }

        if (userToken) {
            requestOptions.headers = myHeaders
        }

        try {
            dl.functions.modalsPlugin.openModal('loading')
            var category = filters.Categories ? filters.Categories : ''
            var count = 0
            dl.changes.blogQuery = ''
            if (category.length > 0) {
                for (
                    var i = 0;
                    i < dl.changes.blogsFilter[0].options.length;
                    i++
                ) {
                    if (dl.changes.blogsFilter[0].options[i].selected) {
                        dl.changes.blogQuery =
                            dl.changes.blogQuery +
                            // `&filters[$or][${count}][categories][Title][$eq]=${dl.changes.blogsFilter[0].options[i].name} `
                            `&filters[$or][${count}][categories][Title][$eq]=${dl.changes.blogsFilter[0].options[i].name} `
                        count = count + 1
                    }
                }
                // dl.changes.blogQuery = `&filters[categories][Title][$eqi]=${category} `
            } else {
                dl.changes.blogQuery = ''
            }

            var subCategory = filters.Subcategory ? filters.Subcategory : ''
            if (subCategory.length > 0) {
                dl.changes.blogQuery = `&filters[sub_category][Subcategory][$eq][1]=${subCategory}`
                // dl.changes.blogQuery +
            }

            var response = await dl.functions.getBlogs(12, '', 1)
            // alert(JSON.stringify(response))
            var res = response.result

            if (res.length == 0) {
                dl.changes.blogNoDataVisible = 'flex'
                dl.changes.blogsList = []
                dl.changes.paginationState.total = 0
                dl.changes.paginationState.active = 0
                dl.functions.modalsPlugin.closeModal('loading')
                return
            } else {
                dl.changes.blogNoDataVisible = 'none'
                dl.functions.modalsPlugin.closeModal('loading')
            }

            // const formattedDate = (date) =>
            //     `${date.getDate()} ${date.toLocaleString('default', {
            //         month: 'short',
            //     })} ${date.getFullYear()}`

            // var category = filters.Categories ? filters.Categories : ''
            // if (category == 'Travel & Adventure') {
            //     category = 'Travel %26 Adventure'
            // }
            // if (category == 'Visa & Immigration') {
            //     category = 'Visa Immigration'
            // }
            // var baseUrl = process.env.BASE_URL
            // const response = await fetch(
            //     // `https://melody-mocktail-6tjz.api.neutrodev.com/user/blogs?limit=9&page=1&category=${category}`,
            //     `${baseUrl}/user/blogs?limit=9&page=1&category=${category}`,
            //     requestOptions
            // )
            // const res = await response.json()
            //
            // dl.functions.modalsPlugin.closeModal('loading')
            // // alert(JSON.stringify(res))
            // dl.changes.paginationState.total = res.totalPage
            // dl.changes.paginationState.active = 1
            // for (var i = 0; i < res.result.length; i++) {
            //     // var desc = JSON.stringify(res.result[i].description.html)
            //     var description = dl.functions.common.stripHtml(
            //         res.result[i].description.html
            //     )
            //     res.result[i]['description'] =
            //         description.substring(0, 60) + '....'
            //     res.result[i]['title'] =
            //         res.result[i].title.substring(0, 20) + ' ..'
            //     if (res.result[i].isBookmarked == true) {
            //         res.result[i]['bookmarkactive'] = 'flex'
            //         res.result[i]['bookmarkinactive'] = 'none'
            //     } else {
            //         res.result[i]['bookmarkactive'] = 'none'
            //         res.result[i]['bookmarkinactive'] = 'flex'
            //     }
            //     res.result[i]['imageurl'] = res.result[i].image
            //         ? 'url(' + res.result[i].image.url + ')'
            //         : 'url(https://images.unsplash.com/photo-1682832919420-b2aca69e6ebc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60)'
            //     res.result[i]['date'] = formattedDate(
            //         new Date(res.result[i]['cOn'])
            //     )
            // }
            dl.changes.blogsList = res
            return { status: response.status, result: res }
        } catch (err) {
            return err
        }
    }
    dl.functions.applyBlogFilter = applyBlogFilter

    const applyVisaQuestionFilters = async () => {
        var filters = {}

        var filterobj = dl.changes.visaFilter
        for (var i = 0; i < filterobj.length; i++) {
            var filtername = filterobj[i].filterName
            if (filterobj[i].multi == true) {
                filters[filtername] = []
            }

            var options = filterobj[i].options
            for (var j = 0; j < options.length; j++) {
                if (options[j].selected == true && filterobj[i].multi == true) {
                    filters[filtername].push(options[j].name)
                } else if (
                    options[j].selected == true &&
                    filterobj[i].multi == false
                ) {
                    filters[filtername] = options[j].name
                }
            }
        }
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
        }

        try {
            dl.functions.modalsPlugin.openModal('loading')
            var category = filters.Categories ? filters.Categories : ''
            var baseUrl = process.env.BASE_URL
            const response = await fetch(
                // `https://melody-mocktail-6tjz.api.neutrodev.com/user/visaqandas?page=1&limit=9&category=${category}`,
                `${baseUrl}/user/visaqandas?page=1&limit=9&category=${category}`,
                requestOptions
            )
            const res = await response.json()
            if (res.result.length == 0) {
                dl.changes.visaQuestionNoDataVisible = 'flex'
                dl.changes.visaquestions = []
                dl.functions.modalsPlugin.closeModal('loading')
                dl.changes.paginationState.total = 0
                dl.changes.paginationState.active = 0
                return
            } else {
                dl.changes.visaQuestionNoDataVisible = 'none'
            }
            dl.functions.modalsPlugin.closeModal('loading')
            dl.changes.paginationState.total = res.totalPage
            dl.changes.paginationState.active = 1
            if (response.status == 200) {
                var result = res.result
                for (var i = 0; i < result.length; i++) {
                    result[i]['bookmarkactiveVisible'] = 'none'
                    result[i]['bookmarkInactiveVisible'] = 'flex'
                    var date = new Date(result[i].cOn)
                    var options = {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    }
                    // dl.changes.rideDetail["dateOfJourney"] = date.toLocaleString(undefined, options);
                    result[i]['postedOn'] =
                        'Posted on ' + date.toLocaleString(undefined, options)
                    result[i]['commentCount'] =
                        result[i].commentCount + ' ' + 'Comments'

                    result[i]['answered'] = i == 1 ? true : false
                }
                dl.changes.visaquestions = result
            } else {
                return 'Something went wrong'
            }
        } catch (err) {
            return err
        }
    }
    dl.functions.applyVisaQuestionFilters = applyVisaQuestionFilters

    const applyVisafaqFilters = async () => {
        var filters = {}

        var filterobj = dl.changes.visaFilter
        for (var i = 0; i < filterobj.length; i++) {
            var filtername = filterobj[i].filterName
            if (filterobj[i].multi == true) {
                filters[filtername] = []
            }

            var options = filterobj[i].options
            for (var j = 0; j < options.length; j++) {
                if (options[j].selected == true && filterobj[i].multi == true) {
                    filters[filtername].push(options[j].name)
                } else if (
                    options[j].selected == true &&
                    filterobj[i].multi == false
                ) {
                    filters[filtername] = options[j].name
                }
            }
        }
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
        }

        try {
            dl.functions.modalsPlugin.openModal('loading')
            var category = filters.Categories ? filters.Categories : ''
            var baseUrl = process.env.BASE_URL
            const response = await fetch(
                // `https://melody-mocktail-6tjz.api.neutrodev.com/user/visafaqs?limit=10&page=1&category=${category}`,
                `${baseUrl}/user/visafaqs?limit=10&page=1&category=${category}`,
                requestOptions
            )
            const res = await response.json()
            if (res.result.length == 0) {
                dl.changes.visaFaqNoDataVisible = 'flex'
            } else {
                dl.changes.visaFaqNoDataVisible = 'none'
            }
            dl.functions.modalsPlugin.closeModal('loading')
            dl.changes.paginationState.total = res.totalPage
            dl.changes.paginationState.active = 1
            if (response.status == 200) {
                var result = res.result
                for (var i = 0; i < result.length; i++) {
                    result[i]['answerVisible'] = 'none'
                    result[i]['arrowVisible'] = 'flex'
                    // result[i]["bookmarkactiveVisible"] = 'none'
                    // result[i]["bookmarkInactiveVisible"] = 'flex'
                }
                dl.changes.visafaqs = result
            } else {
                return 'Something went wrong'
            }
        } catch (err) {
            return err
        }
    }
    dl.functions.applyVisafaqFilters = applyVisafaqFilters

    const getRideSharing = async (limit, page) => {
        // var raw = "";

        var myHeaders = new Headers()

        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)

        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
        }

        if (userToken) {
            requestOptions.headers = myHeaders
        }

        try {
            dl.functions.modalsPlugin.openModal('loading')
            // var category = filters.Categories?filters.Categories:""
            var zipcode =
                dl.changes.rideZipcode > 1
                    ? dl.changes.rideZipcode
                    : dl.changes.userDetail['zipCode']
            if (!zipcode) {
                zipcode = dl.changes.defaultZipCode
            }
            var baseUrl = process.env.BASE_URL
            var spotAvailable = '1'
            const response = await fetch(
                // `https://melody-mocktail-6tjz.api.neutrodev.com/user/rideSharing?zipcode=${zipcode}&limit=${limit}&page=${page}&spotAvailable=${spotAvailable}`,
                `${baseUrl}/user/rideSharing?zipcode=${zipcode}&limit=${limit}&page=${page}&spotAvailable=${spotAvailable}`,
                requestOptions
            )
            const res = await response.json()
            // alert(JSON.stringify(res))

            if (res[0].result.length == 0) {
                dl.changes.rideSharingNoDataVisible = {
                    display: 'flex',
                }
                dl.changes.rideSharingList = []
                dl.changes.paginationState.total = 0
                dl.changes.paginationState.active = 0
                return
            } else {
                dl.changes.rideSharingNoDataVisible = {
                    display: 'none',
                }
            }

            dl.changes.paginationState.total = Math.ceil(
                res[0].count.totalCount / Number(limit)
            )
            dl.changes.paginationState.active = Number(page)

            if (response.status == 200) {
                var result = res[0].result
                // alert(JSON.stringify(result))
                for (var i = 0; i < result.length; i++) {
                    result[i]['title'] =
                        result[i]['from'].city + ' to ' + result[i].to.city
                    result[i]['from'] = result[i]['from'].city
                    result[i]['to'] = result[i].to.city
                    result[i]['price'] = '$' + String(result[i].price)
                    result[i]['spotAvailable'] = result[i].spotAvailable

                    var postedBy = result[i].postedBy
                        ? result[i].postedBy.split(' ')
                        : ['user']
                    var postedOn = new Date(result[i].cOn)
                    const year = postedOn.getFullYear()
                    const month = (postedOn.getMonth() + 1)
                        .toString()
                        .padStart(2, '0')
                    const day = postedOn.getDate().toString().padStart(2, '0')
                    const formattedDate = `${month}-${day}-${year}`
                    // result[i]["postedBy"] = postedBy[0] + " on " + formattedDate
                    result[i]['offeredBy'] =
                        postedBy[0] + ' on ' + formattedDate

                    result[i]['adType'] = result[i].adType
                    if (result[i].isBookmarked == true) {
                        result[i]['bookmarkactive'] = 'flex'
                        result[i]['bookmarkinactive'] = 'none'
                    } else {
                        result[i]['bookmarkactive'] = 'none'
                        result[i]['bookmarkinactive'] = 'flex'
                    }
                    if (result[i].promotion) {
                        if (result[i].promotion.status == true) {
                            result[i]['mmReferalVisible'] = 'flex'
                        } else {
                            result[i]['mmReferalVisible'] = 'none'
                        }
                    } else {
                        result[i]['mmReferalVisible'] = 'none'
                    }

                    if (result[i].dateOfJourney) {
                        var date = new Date(result[i].dateOfJourney)
                        var options = {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        }
                        result[i]['dateOfJourney'] =
                            date.toLocaleString(undefined, options) +
                            ', ' +
                            result[i].time
                    } else {
                        result[i]['dateOfJourney'] = 'no data'
                    }
                }

                dl.changes.rideSharingList = result
                dl.functions.modalsPlugin.closeModal('loading')
                // alert(JSON.stringify(dl.changes.rideSharingList))
            } else {
                dl.functions.modalsPlugin.closeModal('loading')
                return 'Something went wrong'
            }
        } catch (err) {
            // alert(JSON.stringify(err))
            return err
        }
    }
    dl.functions.getRideSharing = getRideSharing

    const getHaveARide = async (limit, page) => {
        var myHeaders = new Headers()

        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)

        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
        }

        if (userToken) {
            requestOptions.headers = myHeaders
        }

        try {
            dl.functions.modalsPlugin.openModal('loading')
            // var category = filters.Categories?filters.Categories:""
            var baseUrl = process.env.BASE_URL
            var zipcode = dl.changes.userDetail.zipCode
                ? dl.changes.userDetail.zipCode
                : '00601'
            var spotAvailable = '3'
            const response = await fetch(
                // `https://melody-mocktail-6tjz.api.neutrodev.com/user/haveARide?zipcode=${zipcode}&limit=${limit}&page=${page}&spotAvailable=${spotAvailable}`,
                `${baseUrl}/user/haveARide?zipcode=${zipcode}&limit=${limit}&page=${page}&spotAvailable=${spotAvailable}`,
                requestOptions
            )
            const res = await response.json()
            dl.functions.modalsPlugin.closeModal('loading')

            // if (res[0].result.length == 0) {
            //   dl.changes.haveARideNoDataVisible = {
            //     display: "flex",
            //   };
            //   dl.changes.haveARideList = [];
            //   dl.changes.paginationState.total = 0;
            //   dl.changes.paginationState.active = 0;
            //   return;
            // } else {
            //   dl.changes.haveARideNoDataVisible = {
            //     display: "none",
            //   };
            // }

            if (res[0].result.length == 0) {
                dl.changes.rideSharingNoDataVisible = {
                    display: 'flex',
                }
                dl.changes.rideSharingList = []
                dl.changes.paginationState.total = 0
                dl.changes.paginationState.active = 0
                return
            } else {
                dl.changes.rideSharingNoDataVisible = {
                    display: 'none',
                }
            }

            dl.changes.paginationState.total = Math.ceil(
                res[0].count.totalCount / Number(limit)
            )
            dl.changes.paginationState.active = Number(page)
            if (response.status == 200) {
                var result = res[0].result
                for (var i = 0; i < result.length; i++) {
                    result[i]['title'] =
                        result[i]['from'].city + ' to ' + result[i].to.city
                    result[i]['from'] = result[i]['from'].city
                    result[i]['to'] = result[i].to.city
                    result[i]['price'] = '$' + String(result[i].price)
                    result[i]['spotAvailable'] = result[i].spotAvailable
                    result[i]['adType'] = result[i].adType

                    var postedBy = result[i].postedBy
                        ? result[i].postedBy.split(' ')
                        : ['user']
                    var postedOn = new Date(result[i].cOn)
                    const year = postedOn.getFullYear()
                    const month = (postedOn.getMonth() + 1)
                        .toString()
                        .padStart(2, '0')
                    const day = postedOn.getDate().toString().padStart(2, '0')
                    const formattedDate = `${month}-${day}-${year}`
                    result[i]['offeredBy'] =
                        postedBy[0] + ' on ' + formattedDate
                    // result[i]["offeredBy"] = result[i].userDetail[0].name ? result[i].userDetail[0].name : "no data"
                    if (result[i].isBookmarked == true) {
                        result[i]['bookmarkactive'] = 'flex'
                        result[i]['bookmarkinactive'] = 'none'
                    } else {
                        result[i]['bookmarkactive'] = 'none'
                        result[i]['bookmarkinactive'] = 'flex'
                    }
                    if (result[i].promotion) {
                        if (result[i].promotion.status == true) {
                            result[i]['mmReferalVisible'] = 'flex'
                        } else {
                            result[i]['mmReferalVisible'] = 'none'
                        }
                    } else {
                        result[i]['mmReferalVisible'] = 'none'
                    }

                    if (result[i].dateOfJourney) {
                        var date = new Date(result[i].dateOfJourney)
                        var options = {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        }
                        result[i]['dateOfJourney'] =
                            date.toLocaleString(undefined, options) +
                            ', ' +
                            result[i].time
                    } else {
                        result[i]['dateOfJourney'] = 'no data'
                    }
                }
                // dl.changes.haveARideList = result;  //old
                dl.changes.rideSharingList = result
                dl.functions.modalsPlugin.closeModal('loading')
            } else {
                dl.functions.modalsPlugin.closeModal('loading')
                return 'Something went wrong'
            }
        } catch (err) {
            return err
        }
    }
    dl.functions.getHaveARides = getHaveARide

    const applyRideSharingFilter = async () => {
        var filters = {}

        var filterobj = dl.changes.rideSharingFilter
        for (var i = 0; i < filterobj.length; i++) {
            var filtername = filterobj[i].filterName
            if (filterobj[i].multi == true) {
                filters[filtername] = []
            }

            var options = filterobj[i].options
            for (var j = 0; j < options.length; j++) {
                if (options[j].selected == true && filterobj[i].multi == true) {
                    filters[filtername].push(options[j].name)
                } else if (
                    options[j].selected == true &&
                    filterobj[i].multi == false
                ) {
                    filters[filtername] = options[j].name
                }
            }
        }
        // alert(JSON.stringify(filters))

        var myHeaders = new Headers()

        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)

        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
        }

        if (userToken) {
            requestOptions.headers = myHeaders
        }

        try {
            var spotAvailable = ''

            var minPrice = ''
            var maxPrice = ''
            var range = 'asc'
            if (filters.SpotsAvailable == '4 or more') {
                spotAvailable = 4
            } else {
                spotAvailable = filters.SpotsAvailable
            }

            if (filters.Price == 'under $10') {
                minPrice = 0
                maxPrice = 10
            } else if (filters.Price == '$11 to $25') {
                minPrice = 11
                maxPrice = 25
            } else if (filters.Price == '$26 to $50') {
                minPrice = 26
                maxPrice = 50
            } else if (filters.Price == '$50 & more') {
                minPrice = 50
                maxPrice = 10000000000000000
            }

            if (filters.Range == 'Lowest to highest') {
                range = 'asc'
            } else if (filters.Range == 'Highest to lowest') {
                range = 'des'
            } else {
                range = ''
            }

            var time = filters.Time ? filters.Time : ''
            var rideDate = dl.changes.rideDateFilter

            // var zipcode = dl.changes.userDetail.zipCode ? dl.changes.userDetail.zipCode : "00601"
            let rideZipcode = null
            if (dl.changes.rideZipcode) {
                var tempcode = String(dl.changes.rideZipcode)
                tempcode = tempcode.split(',')
                rideZipcode = tempcode[2]
            }
            var zipcode = rideZipcode
                ? rideZipcode
                : dl.changes.userDetail['zipCode']
            if (!zipcode) {
                zipcode = dl.changes.defaultZipCode
            }
            dl.functions.modalsPlugin.openModal('loading')
            var baseUrl = process.env.BASE_URL
            const response = await fetch(
                // `https://melody-mocktail-6tjz.api.neutrodev.com/user/rideSharing?zipcode=${zipcode}&limit=8&page=1&minPrice=${minPrice}&maxPrice=${maxPrice}&spotAvailable=${spotAvailable}&range=${range}&time=${time}&rideDate=${rideDate}`,
                `${baseUrl}/user/rideSharing?zipcode=${zipcode}&limit=8&page=1&minPrice=${minPrice}&maxPrice=${maxPrice}&spotAvailable=${spotAvailable}&range=${range}&time=${time}&rideDate=${rideDate}`,
                requestOptions
            )
            const res = await response.json()
            // alert(JSON.stringify(res))
            dl.functions.modalsPlugin.closeModal('loading')
            if (res[0].result.length == 0) {
                dl.changes.rideSharingNoDataVisible = {
                    display: 'flex',
                }
                dl.changes.rideSharingList = []
                dl.changes.paginationState.total = 0
                dl.changes.paginationState.active = 0
                return
            } else {
                dl.changes.rideSharingNoDataVisible = {
                    display: 'none',
                }
            }

            dl.changes.paginationState.total = Math.ceil(
                res[0].count.totalCount / 8
            )
            dl.changes.paginationState.active = 1

            if (response.status == 200) {
                var result = res[0].result
                // alert(JSON.stringify(result))
                for (var i = 0; i < result.length; i++) {
                    result[i]['title'] =
                        result[i]['from'].city + ' to ' + result[i].to.city
                    result[i]['from'] = result[i]['from'].city
                    result[i]['to'] = result[i].to.city
                    result[i]['price'] = '$' + String(result[i].price)
                    result[i]['spotAvailable'] = result[i].spotAvailable
                    result[i]['adType'] = result[i].adType

                    var postedBy = result[i].postedBy
                        ? result[i].postedBy.split(' ')
                        : ['user']
                    var postedOn = new Date(result[i].cOn)
                    const year = postedOn.getFullYear()
                    const month = (postedOn.getMonth() + 1)
                        .toString()
                        .padStart(2, '0')
                    const day = postedOn.getDate().toString().padStart(2, '0')
                    const formattedDate = `${month}-${day}-${year}`
                    result[i]['offeredBy'] =
                        postedBy[0] + ' on ' + formattedDate
                    // result[i]["offeredBy"] = result[i].userDetail[0].name ? result[i].userDetail[0].name : "no data"
                    if (result[i].isBookmarked == true) {
                        result[i]['bookmarkactive'] = 'flex'
                        result[i]['bookmarkinactive'] = 'none'
                    } else {
                        result[i]['bookmarkactive'] = 'none'
                        result[i]['bookmarkinactive'] = 'flex'
                    }
                    if (result[i].promotion) {
                        if (result[i].promotion.status == true) {
                            result[i]['mmReferalVisible'] = 'flex'
                        } else {
                            result[i]['mmReferalVisible'] = 'none'
                        }
                    } else {
                        result[i]['mmReferalVisible'] = 'none'
                    }

                    if (result[i].dateOfJourney) {
                        var date = new Date(result[i].dateOfJourney)
                        var options = {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        }
                        result[i]['dateOfJourney'] =
                            date.toLocaleString(undefined, options) +
                            ', ' +
                            result[i].time
                    } else {
                        result[i]['dateOfJourney'] = 'no data'
                    }
                }

                dl.changes.rideSharingList = result
                // alert(JSON.stringify(dl.changes.rideSharingList))
            } else {
                return 'Something went wrong'
            }
        } catch (err) {
            // alert(JSON.stringify(err))
            return err
        }
    }
    dl.functions.applyRideSharingFilter = applyRideSharingFilter

    const applyhaveARideFilter = async (pageNo) => {
        var filters = {}

        var filterobj = dl.changes.rideSharingFilter
        for (var i = 0; i < filterobj.length; i++) {
            var filtername = filterobj[i].filterName
            if (filterobj[i].multi == true) {
                filters[filtername] = []
            }

            var options = filterobj[i].options
            for (var j = 0; j < options.length; j++) {
                if (options[j].selected == true && filterobj[i].multi == true) {
                    filters[filtername].push(options[j].name)
                } else if (
                    options[j].selected == true &&
                    filterobj[i].multi == false
                ) {
                    filters[filtername] = options[j].name
                }
            }
        }
        // alert(JSON.stringify(filters))

        var myHeaders = new Headers()

        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)

        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
        }

        if (userToken) {
            requestOptions.headers = myHeaders
        }

        try {
            var spotAvailable = ''

            var minPrice = ''
            var maxPrice = ''
            var range = 'asc'
            if (filters.SpotsAvailable == '4 or more') {
                spotAvailable = 4
            } else {
                spotAvailable = filters.SpotsAvailable
            }

            if (filters.Price == 'under $10') {
                minPrice = 0
                maxPrice = 10
            } else if (filters.Price == '$11 to $25') {
                minPrice = 11
                maxPrice = 25
            } else if (filters.Price == '$26 to $50') {
                minPrice = 26
                maxPrice = 50
            } else if (filters.Price == '$50 & more') {
                minPrice = 50
                maxPrice = 10000000000000000
            }

            if (filters.Range == 'Lowest to highest') {
                range = 'asc'
            } else if (filters.Range == 'Highest to lowest') {
                range = 'des'
            } else {
                range = ''
            }
            var time = filters.Time ? filters.Time : ''

            var page = '1'

            if (pageNo) {
                page = pageNo
            }

            dl.functions.modalsPlugin.openModal('loading')
            var baseUrl = process.env.BASE_URL
            var zipcode = dl.changes.userDetail.zipCode
                ? dl.changes.userDetail.zipCode
                : dl.changes.defaultZipCode

            const response = await fetch(
                // `https://melody-mocktail-6tjz.api.neutrodev.com/user/haveARide?zipcode=${zipcode}&limit=10&page=${page}&minPrice=${minPrice}&maxPrice=${maxPrice}&spotAvailable=${spotAvailable}&range=${range}&time=${time}`,
                `${baseUrl}/user/haveARide?zipcode=${zipcode}&limit=10&page=${page}&minPrice=${minPrice}&maxPrice=${maxPrice}&spotAvailable=${spotAvailable}&range=${range}&time=${time}`,
                requestOptions
            )

            const res = await response.json()
            // alert(JSON.stringify(res))
            dl.functions.modalsPlugin.closeModal('loading')
            if (res[0].result.length == 0) {
                dl.changes.haveARideNoDataVisible = {
                    display: 'flex',
                }
                dl.changes.haveARideList = []
                dl.changes.paginationState.total = 0
                dl.changes.paginationState.active = 0
                return
            } else {
                dl.changes.haveARideNoDataVisible = {
                    display: 'none',
                }
            }

            dl.changes.paginationState.total = Math.ceil(
                res[0].count.totalCount / 8
            )
            dl.changes.paginationState.active = Number(page)

            if (response.status == 200) {
                var result = res[0].result
                // alert(JSON.stringify(result))
                for (var i = 0; i < result.length; i++) {
                    result[i]['title'] =
                        result[i]['from'].city + ' to ' + result[i].to.city
                    result[i]['from'] = result[i]['from'].city
                    result[i]['to'] = result[i].to.city
                    result[i]['price'] = '$' + String(result[i].price)
                    result[i]['spotAvailable'] = result[i].spotAvailable
                    result[i]['adType'] = result[i].adType
                    result[i]['offeredBy'] = result[i].postedBy
                        ? result[i].postedBy
                        : 'no data'
                    if (result[i].isBookmarked == true) {
                        result[i]['bookmarkactive'] = 'flex'
                        result[i]['bookmarkinactive'] = 'none'
                    } else {
                        result[i]['bookmarkactive'] = 'none'
                        result[i]['bookmarkinactive'] = 'flex'
                    }
                    if (result[i].promotion) {
                        if (result[i].promotion.status == true) {
                            result[i]['mmReferalVisible'] = 'flex'
                        } else {
                            result[i]['mmReferalVisible'] = 'none'
                        }
                    } else {
                        result[i]['mmReferalVisible'] = 'none'
                    }

                    if (result[i].dateOfJourney) {
                        var date = new Date(result[i].dateOfJourney)
                        var options = {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        }
                        result[i]['dateOfJourney'] =
                            date.toLocaleString(undefined, options) +
                            ', ' +
                            result[i].time
                    } else {
                        result[i]['dateOfJourney'] = 'no data'
                    }
                }

                dl.changes.haveARideList = result
                return res
                // alert(JSON.stringify(dl.changes.rideSharingList))
            } else {
                return 'Something went wrong'
            }
        } catch (err) {
            // alert(JSON.stringify(err))
            return err
        }
    }
    dl.functions.applyhaveARideFilter = applyhaveARideFilter

    const getRideDetails = async (rideId) => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
        }

        try {
            dl.functions.modalsPlugin.openModal('loading')
            var baseUrl = process.env.BASE_URL
            var response = await fetch(
                // `https://melody-mocktail-6tjz.api.neutrodev.com/user/rideDetail?rideId=${rideId}`,
                `${baseUrl}/user/rideDetail?rideId=${rideId}`,
                requestOptions
            )
            const res = await response.json()

            dl.functions.modalsPlugin.closeModal('loading')

            if (response.status == 200) {
                dl.changes.rideDetail = res[0]
                dl.changes.rideDetail['title'] =
                    res[0]['from'].city + ' to ' + res[0].to.city
                var postedBy = res[0].postedBy
                    ? res[0].postedBy.split(' ')
                    : ['null', 'null']
                dl.changes.rideDetail['offeredBy'] = postedBy[0]
                dl.changes.rideDetail['price'] = '$' + res[0].price

                var date = new Date(res[0].dateOfJourney)
                var options = { year: 'numeric', month: 'long', day: 'numeric' }
                dl.changes.rideDetail['dateOfJourney'] =
                    date.toLocaleString(undefined, options) + ', ' + res[0].time

                var date = new Date(res[0].cOn)
                var options = { year: 'numeric', month: 'long', day: 'numeric' }
                dl.changes.rideDetail['cOn'] = date.toLocaleString(
                    undefined,
                    options
                )
                // dl.changes.rideDetail["dateOfJourney"] =
                // alert(JSON.stringify(dl.changes.rideSharingList))
                return res
            } else {
                return 'Something went wrong'
            }
        } catch (err) {
            // alert(JSON.stringify(err))
            return err
        }
    }
    dl.functions.getRideDetails = getRideDetails

    const createListMyRide = async (body) => {
        var myHeaders = new Headers()
        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)
        myHeaders.append('Content-Type', 'application/json')

        var raw = JSON.stringify(body)

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
        }

        try {
            dl.functions.modalsPlugin.openModal('loading')
            var baseUrl = process.env.BASE_URL
            var response = await fetch(
                // 'https://melody-mocktail-6tjz.api.neutrodev.com/user/rideSharing/create',
                `${baseUrl}/user/rideSharing/create`,
                requestOptions
            )
            const res = await response.json()

            dl.functions.modalsPlugin.closeModal('loading')

            if (response.status == 200) {
                dl.functions.viewsPlugin.showView('ridesharing')
                return response.status
            } else {
                return 'Something went wrong'
            }
        } catch (err) {
            // alert(JSON.stringify(err))
            return err
        }
    }
    dl.functions.createListMyRide = createListMyRide

    const createNeedARide = async (body) => {
        var myHeaders = new Headers()
        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)
        myHeaders.append('Content-Type', 'application/json')

        var raw = JSON.stringify(body)

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
        }

        try {
            dl.functions.modalsPlugin.openModal('loading')
            var baseUrl = process.env.BASE_URL
            var response = await fetch(
                // 'https://melody-mocktail-6tjz.api.neutrodev.com/user/needARide/create',
                `${baseUrl}/user/needARide/create`,
                requestOptions
            )
            const res = await response.json()

            dl.functions.modalsPlugin.closeModal('loading')

            if (response.status == 200) {
                dl.functions.viewsPlugin.showView('ridesharing')
                return response.status
            } else {
                return 'Something went wrong'
            }
        } catch (err) {
            // alert(JSON.stringify(err))
            return err
        }
    }
    dl.functions.createNeedARide = createNeedARide

    const searchZipCode = async (val) => {
        var myHeaders = new Headers()
        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow',
        }

        try {
            // dl.functions.modalsPlugin.openModal('loading')
            var baseUrl = process.env.BASE_URL
            var response = await fetch(
                // `https://melody-mocktail-6tjz.api.neutrodev.com/user/zipcode/search?search=${val}`,
                `${baseUrl}/user/zipcode/search?search=${val}`,
                requestOptions
            )
            const res = await response.json()

            // dl.functions.modalsPlugin.closeModal("loading")

            if (response.status == 200) {
                return res
            } else {
                return 'Something went wrong'
            }
        } catch (err) {
            // alert(JSON.stringify(err))
            return err
        }
    }
    dl.functions.searchZipCode = searchZipCode

    const getVisaQuestionComments = async (visaQuestionId) => {
        var myHeaders = new Headers()
        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow',
        }

        try {
            dl.functions.modalsPlugin.openModal('loading')
            var baseUrl = process.env.BASE_URL
            var response = await fetch(
                // `https://melody-mocktail-6tjz.api.neutrodev.com/user/visaquestioncomments?visaQuestionID=${visaQuestionId}`,
                `${baseUrl}/user/visaquestioncomments?visaQuestionID=${visaQuestionId}`,
                requestOptions
            )
            const res = await response.json()
            var result = []
            if (response.status == 200) {
                for (var i = 0; i < res.length; i++) {
                    var username = ''
                    var deleteButtonVisible = 'none'
                    var reportButtonVisible = 'flex'
                    if (res[i].user._id == dl.changes.userDetail.userId) {
                        username = 'you'
                        deleteButtonVisible = 'flex'
                        reportButtonVisible = 'none'
                    } else {
                        username = res[i].user.name
                        deleteButtonVisible = 'none'
                        reportButtonVisible = 'flex'
                    }
                    var date = new Date(res[i].cOn)
                    var options = {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    }
                    var createdOn = date.toLocaleString(undefined, options)

                    let userProfilePic =
                        res[i].user.profilePic.length > 0
                            ? res[i].user.profilePic[0].url
                            : 'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/CommentUserProfile.png'

                    var comments = {
                        name: username,
                        comment: res[i].comment,
                        commentId: res[i]._id,

                        createdOn: createdOn,
                        deleteButtonVisible: deleteButtonVisible,
                        reportButtonVisible: reportButtonVisible,
                        userProfile: userProfilePic,
                    }
                    if (res[i].status == 'active') {
                        result.push(comments)
                    }
                }

                dl.changes.visaQuestionComments = result
                dl.functions.modalsPlugin.closeModal('loading')
                // console.log(dl.changes.visaQuestionComments)
            } else {
                return 'Something went wrong'
            }
        } catch (err) {
            // alert(JSON.stringify(err))
            return err
        }
    }
    dl.functions.getVisaQuestionComments = getVisaQuestionComments

    const createVisaQuestionComment = async (body) => {
        var myHeaders = new Headers()
        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)
        myHeaders.append('Content-Type', 'application/json')

        var raw = JSON.stringify(body)

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
        }

        try {
            dl.functions.modalsPlugin.openModal('loading')
            var baseUrl = process.env.BASE_URL
            var response = await fetch(
                // 'https://melody-mocktail-6tjz.api.neutrodev.com/user/visaquestioncomments/create',
                `${baseUrl}/user/visaquestioncomments/create`,
                requestOptions
            )
            const res = await response.json()

            dl.functions.modalsPlugin.closeModal('loading')

            if (response.status == 200) {
                dl.changes.createVisaQuestionComment = ''
                return response.status
            } else {
                return 'Something went wrong'
            }
        } catch (err) {
            // alert(JSON.stringify(err))
            return err
        }
    }
    dl.functions.createVisaQuestionComment = createVisaQuestionComment

    const visaQuestionCommentDelete = async (body) => {
        var myHeaders = new Headers()
        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)
        myHeaders.append('Content-Type', 'application/json')

        var raw = JSON.stringify(body)

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
        }

        try {
            dl.functions.modalsPlugin.openModal('loading')
            var baseUrl = process.env.BASE_URL
            var response = await fetch(
                // 'https://melody-mocktail-6tjz.api.neutrodev.com/user/visaquestioncomments/delete',
                `${baseUrl}/user/visaquestioncomments/delete`,
                requestOptions
            )
            const res = await response.json()

            dl.functions.modalsPlugin.closeModal('loading')

            if (response.status == 200) {
                return response.status
            } else {
                return 'Something went wrong'
            }
        } catch (err) {
            // alert(JSON.stringify(err))
            return err
        }
    }
    dl.functions.visaQuestionCommentDelete = visaQuestionCommentDelete

    const validateRoomForm = () => {
        let isValid = true
        let obj = dl.changes.iHaveAroomForm

        var requiredFields = [
            'type',
            'address',
            'zipCode',
            'leaseType',
            'availableFrom',
            'noOfPeople',
            'attatchedBath',
            'gender',
            'rent',
            'priceMode',
            'utilities',
            'title',
            'description',
            'name',
            'email',
            'phone',
        ]

        for (let key in obj) {
            if (requiredFields.includes(key)) {
                if (obj[key].value == '') {
                    dl.changes.iHaveAroomForm[key]['inputBorderColor'] =
                        'rgba(248,246,246,1)'
                    dl.changes.iHaveAroomForm[key]['showErrorMessage'] = 'flex'
                    dl.changes.iHaveAroomForm[key][
                        'errorMessage'
                    ] = `Required Field`

                    isValid = false
                }
            }
        }

        var numberFields = ['rent']
        for (var i = 0; i < numberFields.length; i++) {
            let key = numberFields[i]
            if (obj[key] != '') {
                if (isNaN(obj[key].value)) {
                    dl.changes.iHaveAroomForm[key]['inputBorderColor'] =
                        'rgba(248,246,246,1)'
                    dl.changes.iHaveAroomForm[key]['showErrorMessage'] = 'flex'
                    dl.changes.iHaveAroomForm[key][
                        'errorMessage'
                    ] = `This field should be a number`
                    isValid = false
                }
            }
        }

        return isValid
    }
    dl.functions.validateRoomForm = validateRoomForm

    const validateNeedARoomForm = () => {
        let isValid = true
        let obj = dl.changes.iNeedAroomForm

        var requiredFields = [
            'type',
            'zipCode',
            'leaseType',
            'neededFrom',
            'noOfPeople',
            'attatchedBath',
            'gender',
            'rent',
            'priceMode',
            'utilities',
            'title',
            'description',
            'name',
            'email',
            'phone',
        ]

        for (let key in obj) {
            if (requiredFields.includes(key)) {
                if (obj[key].value == '') {
                    dl.changes.iNeedAroomForm[key]['inputBorderColor'] =
                        'rgba(248,246,246,1)'
                    dl.changes.iNeedAroomForm[key]['showErrorMessage'] = 'flex'
                    isValid = false
                }
            }
        }

        return isValid
    }
    dl.functions.validateNeedARoomForm = validateNeedARoomForm

    const validateHomeForm = () => {
        let isValid = true
        let obj = dl.changes.iHaveAhomeForm

        var requiredFields = [
            'type',
            'address',
            'zipCode',
            'leaseType',
            'availableFrom',
            'utilities',
            'noOfPeople',
            'gender',
            'rent',
            'priceMode',
            'title',
            'description',
            'name',
            'email',
            'phone',
            'preferredRent',
            'priceMode',
        ]

        for (let key in obj) {
            if (requiredFields.includes(key)) {
                if (obj[key].value == '') {
                    dl.changes.iHaveAhomeForm[key]['inputBorderColor'] =
                        'rgba(248,246,246,1)'
                    dl.changes.iHaveAhomeForm[key]['showErrorMessage'] = 'flex'
                    isValid = false
                }
            }
        }

        return isValid
    }
    dl.functions.validateHomeForm = validateHomeForm

    const validateNeedAHomeForm = () => {
        let isValid = true
        let obj = dl.changes.iNeedAhomeForm

        var requiredFields = [
            'type',
            'address',
            'zipCode',
            'leaseType',
            'neededBy',
            'utilities',
            'noOfPeople',
            'gender',
            'rent',
            'priceMode',
            'title',
            'description',
            'name',
            'email',
            'phone',
        ]

        for (let key in obj) {
            if (requiredFields.includes(key)) {
                if (obj[key].value == '') {
                    dl.changes.iNeedAhomeForm[key]['inputBorderColor'] =
                        'rgba(248,246,246,1)'
                    dl.changes.iNeedAhomeForm[key]['showErrorMessage'] = 'flex'
                    isValid = false
                }
            }
        }

        return isValid
    }
    dl.functions.validateNeedAHomeForm = validateNeedAHomeForm

    const createHomeRental = async (body) => {
        var myHeaders = new Headers()
        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)
        myHeaders.append('Content-Type', 'application/json')

        var raw = JSON.stringify(body)

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
        }

        try {
            dl.functions.modalsPlugin.openModal('loading')
            var baseUrl = process.env.BASE_URL
            var response = await fetch(
                // 'https://melody-mocktail-6tjz.api.neutrodev.com/user/rental/create',
                `${baseUrl}/user/rental/create`,
                requestOptions
            )
            const res = await response.json()

            dl.functions.modalsPlugin.closeModal('loading')

            if (response.status == 200) {
                // dl.functions.viewsPlugin.showView("homerentals");
                dl.functions.viewsPlugin.showView('rooms')
                var currentPath = dl.functions.common.getLastPath()
                dl.functions.onLoadFunctions[currentPath]()
                return response.status
            } else {
                return 'Something went wrong'
            }
        } catch (err) {
            // alert(JSON.stringify(err))
            return err
        }
    }
    dl.functions.createHomeRental = createHomeRental

    const createNeedAHome = async (body) => {
        var myHeaders = new Headers()
        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)
        myHeaders.append('Content-Type', 'application/json')

        var raw = JSON.stringify(body)

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
        }

        try {
            dl.functions.modalsPlugin.openModal('loading')
            var baseUrl = process.env.BASE_URL
            var response = await fetch(
                // 'https://melody-mocktail-6tjz.api.neutrodev.com/user/needarental/create',
                `${baseUrl}/user/needarental/create`,
                requestOptions
            )
            const res = await response.json()

            dl.functions.modalsPlugin.closeModal('loading')

            if (response.status == 200) {
                dl.functions.viewsPlugin.showView('ihavearoom')
                var currentPath = dl.functions.common.getLastPath()
                dl.functions.onLoadFunctions[currentPath]()
                return response.status
            } else {
                return 'Something went wrong'
            }
        } catch (err) {
            // alert(JSON.stringify(err))
            return err
        }
    }
    dl.functions.createNeedAHome = createNeedAHome

    const createNeedARoom = async (body) => {
        // alert('called')
        var myHeaders = new Headers()
        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)
        myHeaders.append('Content-Type', 'application/json')

        var raw = JSON.stringify(body)

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
        }

        try {
            dl.functions.modalsPlugin.openModal('loading')
            var baseUrl = process.env.BASE_URL
            var response = await fetch(
                // 'https://melody-mocktail-6tjz.api.neutrodev.com/user/needarental/create',
                `${baseUrl}/user/needarental/create`,
                requestOptions
            )
            const res = await response.json()

            if (response.status == 200) {
                dl.functions.viewsPlugin.showView('ihavearoom')
                var currentPath = dl.functions.common.getLastPath()
                dl.functions.onLoadFunctions[currentPath]()
                dl.functions.modalsPlugin.closeModal('loading')
                return response.status
            } else {
                return 'Something went wrong'
            }
        } catch (err) {
            // alert(JSON.stringify(err))
            return err
        }
    }
    dl.functions.createNeedARoom = createNeedARoom

    const createRoom = async (body) => {
        var myHeaders = new Headers()
        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)
        myHeaders.append('Content-Type', 'application/json')

        var raw = JSON.stringify(body)

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
        }

        try {
            dl.functions.modalsPlugin.openModal('loading')
            var baseUrl = process.env.BASE_URL
            var response = await fetch(
                // 'https://melody-mocktail-6tjz.api.neutrodev.com/user/rental/create',
                `${baseUrl}/user/rental/create`,
                requestOptions
            )
            const res = await response.json()

            dl.functions.modalsPlugin.closeModal('loading')

            if (response.status == 200) {
                dl.functions.viewsPlugin.showView('rooms')
                var currentPath = dl.functions.common.getLastPath()
                dl.functions.onLoadFunctions[currentPath]()
                return response.status
            } else {
                return 'Something went wrong'
            }
        } catch (err) {
            // alert(JSON.stringify(err))
            return err
        }
    }
    dl.functions.createRoom = createRoom

    const getHomeRentels = async (limit, page) => {
        var myHeaders = new Headers()
        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)

        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
        }

        if (userToken) {
            requestOptions.headers = myHeaders
        }

        try {
            dl.functions.modalsPlugin.openModal('loading')
            var baseUrl = process.env.BASE_URL
            var zipcode = dl.changes.userDetail.zipCode
                ? dl.changes.userDetail.zipCode
                : '00601'

            var response = await fetch(
                // `https://melody-mocktail-6tjz.api.neutrodev.com/user/homes?zipcode=${zipcode}&limit=${limit}&page=${page}`,
                `${baseUrl}/user/homes?zipcode=${zipcode}&limit=${limit}&page=${page}`,
                requestOptions
            )
            const res = await response.json()
            if (res[0].result.length == 0) {
                dl.changes.rentelNodataVisible = {
                    display: 'flex',
                }
                dl.changes.paginationState.total = 0
                dl.changes.paginationState.active = 0
                dl.changes.homeRentelsList = []
                dl.functions.modalsPlugin.closeModal('loading')
                return
            } else {
                dl.changes.rentelNodataVisible = {
                    display: 'none',
                }
            }
            dl.functions.modalsPlugin.closeModal('loading')
            dl.changes.paginationState.total = Math.ceil(
                res[0].count.totalCount / Number(limit)
            )
            dl.changes.paginationState.active = Number(page)
            var result = res[0].result

            if (response.status == 200) {
                for (var i = 0; i < res[0].result.length; i++) {
                    let priceMode = result[i].priceMode
                    if (priceMode) {
                        priceMode = priceMode.split(' ')[1]
                    }
                    result[i]['price'] =
                        '$' + result[i].preferredRent + '/' + priceMode
                    result[i]['location'] =
                        result[i].zipCode.city + ',' + result[i].zipCode.state
                    // result[i]["price"] = result[i].preferredRent
                    result[i]['AdType'] = 'Offered'

                    var postedBy = result[i].name
                        ? result[i].name.split(' ')
                        : ['user']
                    var postedOn = new Date(result[i].cOn)
                    const year = postedOn.getFullYear()
                    const month = (postedOn.getMonth() + 1)
                        .toString()
                        .padStart(2, '0')
                    const day = postedOn.getDate().toString().padStart(2, '0')
                    const formattedDate = `${month}-${day}-${year}`
                    result[i]['postedBy'] = postedBy[0] + ' on ' + formattedDate
                    // result[i]["postedBy"] = result[i].userDetail[0] ? result[i].userDetail[0].name : "user"

                    var date = new Date(result[i].availabilityFrom)
                    var options = {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    }
                    result[i]['availabilityFrom'] = date.toLocaleString(
                        undefined,
                        options
                    )

                    if (result[i].availabilityTo) {
                        var date = new Date(result[i].availabilityTo)
                        var options = {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        }
                        result[i]['availabilityTo'] = date.toLocaleString(
                            undefined,
                            options
                        )
                    } else {
                        result[i]['availabilityTo'] = 'no data'
                    }

                    if (result[i].promotion.status == 'true') {
                        result[i]['mmReferalVisible'] = 'flex'
                    } else {
                        result[i]['mmReferalVisible'] = 'none'
                    }

                    if (result[i].files[0]) {
                        result[i]['image'] =
                            'url(' + result[i].files[0].url + ')'
                    } else {
                        result[i]['image'] =
                            'url(https://thumbs.dreamstime.com/b/apartment-building-balconies-photoof-34869405.jpg)'
                    }

                    if (result[i].isBookmarked == true) {
                        result[i]['bookmarkactive'] = 'flex'
                        result[i]['bookmarkinactive'] = 'none'
                    } else {
                        result[i]['bookmarkactive'] = 'none'
                        result[i]['bookmarkinactive'] = 'flex'
                    }

                    result[i]['contactVisible'] = 'flex'
                    result[i]['promotionVisible'] = 'none'
                    result[i]['EditDeleteVisible'] = 'none'
                    result[i]['promotionDateVisible'] = 'none'
                }
                // dl.functions.viewsPlugin.showView("home")
                dl.changes.homeRentelsList = result
                // alert(JSON.stringify(dl.changes.homeRentelsList))
                return { status: response.status, result: result }
            } else {
                return 'Something went wrong'
            }
        } catch (err) {
            // alert(JSON.stringify(err))
            return err
        }
    }
    dl.functions.getHomeRentels = getHomeRentels

    const getNeedAHome = async (limit, page) => {
        var myHeaders = new Headers()

        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)

        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
        }

        if (userToken) {
            requestOptions.headers = myHeaders
        }

        try {
            dl.functions.modalsPlugin.openModal('loading')
            var baseUrl = process.env.BASE_URL
            var zipcode = dl.changes.userDetail.zipCode
                ? dl.changes.userDetail.zipCode
                : '00601'

            var response = await fetch(
                // `https://melody-mocktail-6tjz.api.neutrodev.com/user/needAHomes?zipcode=${zipcode}&limit=${limit}&page=${page}`,
                `${baseUrl}/user/needAHomes?zipcode=${zipcode}&limit=${limit}&page=${page}`,
                requestOptions
            )
            const res = await response.json()
            if (res[0].result.length == 0) {
                dl.changes.rentelNodataVisible = {
                    display: 'flex',
                }
                dl.changes.paginationState.total = 0
                dl.changes.paginationState.active = 0
                dl.changes.needAHomeList = []
                dl.functions.modalsPlugin.closeModal('loading')
                return
            } else {
                dl.changes.rentelNodataVisible = {
                    display: 'none',
                }
            }
            dl.functions.modalsPlugin.closeModal('loading')
            dl.changes.paginationState.total = Math.ceil(
                res[0].count.totalCount / Number(limit)
            )
            dl.changes.paginationState.active = Number(page)
            var result = res[0].result

            if (response.status == 200) {
                for (var i = 0; i < res[0].result.length; i++) {
                    result[i]['location'] =
                        result[i].zipCode.city + ',' + result[i].zipCode.state
                    // result[i]["price"] = result[i].preferredRent
                    result[i]['AdType'] = 'wanted'

                    var postedBy = result[i].name
                        ? result[i].name.split(' ')
                        : ['user']
                    var postedOn = new Date(result[i].cOn)
                    const year = postedOn.getFullYear()
                    const month = (postedOn.getMonth() + 1)
                        .toString()
                        .padStart(2, '0')
                    const day = postedOn.getDate().toString().padStart(2, '0')
                    const formattedDate = `${month}-${day}-${year}`
                    result[i]['postedBy'] = postedBy[0] + ' on ' + formattedDate
                    // result[i]["postedBy"] = result[i].userDetail[0] ? result[i].userDetail[0].name : "user"

                    // var date = new Date(result[i].neededBy);
                    // var options = { year: 'numeric', month: 'long', day: 'numeric' };
                    // result[i]["neededBy"] = date.toLocaleString(undefined, options);
                    result[i]['neededBy'] = result[i].neededBy

                    if (result[i].promotion.status == 'true') {
                        result[i]['mmReferalVisible'] = 'flex'
                    } else {
                        result[i]['mmReferalVisible'] = 'none'
                    }

                    if (result[i].isBookmarked == true) {
                        result[i]['bookmarkactive'] = 'flex'
                        result[i]['bookmarkinactive'] = 'none'
                    } else {
                        result[i]['bookmarkactive'] = 'none'
                        result[i]['bookmarkinactive'] = 'flex'
                    }
                    result[i]['contactVisible'] = 'flex'
                    result[i]['promotionVisible'] = 'none'
                    result[i]['EditDeleteVisible'] = 'none'
                    result[i]['promotionDateVisible'] = 'none'
                }
                // dl.functions.viewsPlugin.showView("home")
                dl.changes.needAHomeList = result
                // alert(JSON.stringify(dl.changes.needAHomeList))
                return { status: response.status, result: result }
            } else {
                return 'Something went wrong'
            }
        } catch (err) {
            // alert(JSON.stringify(err))
            return err
        }
    }
    dl.functions.getNeedAHome = getNeedAHome

    const getRooms = async (limit, page) => {
        var myHeaders = new Headers()

        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)

        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
        }

        if (userToken) {
            requestOptions.headers = myHeaders
        }

        try {
            dl.functions.modalsPlugin.openModal('loading')
            var baseUrl = process.env.BASE_URL
            var zipcode = dl.changes.userDetail.zipCode
                ? dl.changes.userDetail.zipCode
                : '00601'
            var response = await fetch(
                // `https://melody-mocktail-6tjz.api.neutrodev.com/user/rentals?zipcode=${zipcode}&limit=${limit}&page=${page}`,
                `${baseUrl}/user/rentals?zipcode=${zipcode}&limit=${limit}&page=${page}`,
                requestOptions
            )
            const res = await response.json()

            if (res[0].result.length == 0) {
                dl.changes.rentelNodataVisible = {
                    display: 'flex',
                }
                dl.changes.paginationState.total = 0
                dl.changes.paginationState.active = 0
                dl.changes.roomsList = []
                dl.functions.modalsPlugin.closeModal('loading')
                return
            } else {
                dl.changes.rentelNodataVisible = {
                    display: 'none',
                }
            }

            dl.changes.paginationState.total = Math.ceil(
                res[0].count.totalCount / Number(limit)
            )
            dl.changes.paginationState.active = Number(page)
            var result = res[0].result // old
            if (response.status == 200) {
                for (var i = 0; i < res[0].result.length; i++) {
                    let priceMode = result[i].priceMode
                    if (priceMode) {
                        priceMode = priceMode.split(' ')[1]
                    }

                    if (result[i].rentalType == 'Home') {
                        result[i]['rent'] =
                            '$' +
                            (result[i].preferredRent
                                ? result[i].preferredRent
                                : result[i].preferedRent) +
                            '/' +
                            priceMode
                    } else {
                        result[i]['rent'] =
                            '$' + result[i].preferedRent + '/' + priceMode
                    }
                    result[i]['location'] =
                        result[i].zipCode.city + ',' + result[i].zipCode.state
                    // result[i]["price"] = result[i].preferredRent
                    result[i]['AdType'] = 'Offered'

                    // POSTED By
                    var postedBy = result[i].name
                        ? result[i].name.split(' ')
                        : ['user']
                    var postedOn = new Date(result[i].cOn)
                    const year = postedOn.getFullYear()
                    const month = (postedOn.getMonth() + 1)
                        .toString()
                        .padStart(2, '0')
                    const day = postedOn.getDate().toString().padStart(2, '0')
                    const formattedDate = `${month}-${day}-${year}`
                    result[i]['postedBy'] = postedBy[0] + ' on ' + formattedDate

                    // result[i]["rent"] = result[i].preferedRent ? "$"+result[i].preferedRent+ ' ' + result[i].priceMode : "null"
                    var date = new Date(result[i].availabilityFrom)
                    var options = {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    }
                    result[i]['availabilityFrom'] = date.toLocaleString(
                        undefined,
                        options
                    )

                    var date = new Date(result[i].availabilityTo)
                    var options = {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    }
                    result[i]['availabilityTo'] = date.toLocaleString(
                        undefined,
                        options
                    )

                    if (result[i].promotion.status == 'true') {
                        result[i]['mmReferalVisible'] = 'flex'
                    } else {
                        result[i]['mmReferalVisible'] = 'none'
                    }

                    if (result[i].files[0]) {
                        result[i]['image'] =
                            'url(' + result[i].files[0].url + ')'
                    } else {
                        result[i]['image'] =
                            'url(https://www.home-designing.com/wp-content/uploads/2018/05/stylish-mid-century-style-green-living-room.jpg)'
                    }

                    if (result[i].isBookmarked == true) {
                        result[i]['bookmarkactive'] = 'flex'
                        result[i]['bookmarkinactive'] = 'none'
                    } else {
                        result[i]['bookmarkactive'] = 'none'
                        result[i]['bookmarkinactive'] = 'flex'
                    }
                    result[i]['promotionVisible'] = 'none'
                    result[i]['EditDeleteVisible'] = 'none'
                    result[i]['promotionDateVisible'] = 'none'
                    result[i]['contactVisible'] = 'flex'
                }
                // dl.functions.viewsPlugin.showView("home")

                dl.changes.roomsList = result
                // alert(JSON.stringify(dl.changes.roomsList))
                dl.functions.modalsPlugin.closeModal('loading')
                return { status: response.status, result: result }
            } else {
                dl.functions.modalsPlugin.closeModal('loading')
                return 'Something went wrong'
            }
        } catch (err) {
            // alert(JSON.stringify(err))
            return err
        }
    }
    dl.functions.getRooms = getRooms

    const getNeedAroom = async (limit, page) => {
        var myHeaders = new Headers()

        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)

        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
        }

        if (userToken) {
            requestOptions.headers = myHeaders
        }
        try {
            dl.functions.modalsPlugin.openModal('loading')
            var baseUrl = process.env.BASE_URL
            var zipcode = dl.changes.userDetail.zipCode
                ? dl.changes.userDetail.zipCode
                : '00601'
            var response = await fetch(
                // `https://melody-mocktail-6tjz.api.neutrodev.com/user/needarental?zipcode=${zipcode}&limit=${limit}&page=${page}`,
                `${baseUrl}/user/needarental?zipcode=${zipcode}&limit=${limit}&page=${page}`,
                requestOptions
            )
            const res = await response.json()
            if (res[0].result.length == 0) {
                dl.changes.rentelNodataVisible = {
                    display: 'flex',
                }
                dl.changes.paginationState.total = 0
                dl.changes.paginationState.active = 0
                dl.changes.needARoomList = []
                dl.functions.modalsPlugin.closeModal('loading')
                return
            } else {
                dl.changes.rentelNodataVisible = {
                    display: 'none',
                }
            }
            dl.functions.modalsPlugin.closeModal('loading')

            dl.changes.paginationState.total = Math.ceil(
                res[0].count.totalCount / Number(limit)
            )
            dl.changes.paginationState.active = Number(page)
            var result = res[0].result
            if (response.status == 200) {
                for (var i = 0; i < res[0].result.length; i++) {
                    result[i]['location'] =
                        result[i].zipCode.city + ',' + result[i].zipCode.state
                    // result[i]["price"] = "100"
                    result[i]['AdType'] = 'wanted'

                    var postedBy = result[i].name
                        ? result[i].name.split(' ')
                        : ['user']
                    var postedOn = new Date(result[i].cOn)
                    const year = postedOn.getFullYear()
                    const month = (postedOn.getMonth() + 1)
                        .toString()
                        .padStart(2, '0')
                    const day = postedOn.getDate().toString().padStart(2, '0')
                    const formattedDate = `${month}-${day}-${year}`
                    result[i]['postedBy'] = postedBy[0] + ' on ' + formattedDate

                    // result[i]["postedBy"] = result[i].userDetail[0]?result[i].userDetail[0].name:"user"

                    var date = new Date(result[i].availabilityFrom)
                    var options = {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    }
                    result[i]['availabilityFrom'] = date.toLocaleString(
                        undefined,
                        options
                    )

                    if (result[i].rentalType == 'Home') {
                        result[i]['availabilityFrom'] = result[i].neededBy
                    }

                    var date = new Date(result[i].availabilityTo)
                    var options = {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    }
                    result[i]['availabilityTo'] = date.toLocaleString(
                        undefined,
                        options
                    )

                    if (result[i].promotion.status == 'true') {
                        result[i]['mmReferalVisible'] = 'flex'
                    } else {
                        result[i]['mmReferalVisible'] = 'none'
                    }

                    if (result[i].isBookmarked == true) {
                        result[i]['bookmarkactive'] = 'flex'
                        result[i]['bookmarkinactive'] = 'none'
                    } else {
                        result[i]['bookmarkactive'] = 'none'
                        result[i]['bookmarkinactive'] = 'flex'
                    }

                    result[i]['promotionVisible'] = 'none'
                    result[i]['EditDeleteVisible'] = 'none'
                    result[i]['promotionDateVisible'] = 'none'
                    result[i]['contactVisible'] = 'flex'
                }
                // dl.functions.viewsPlugin.showView("home")
                dl.changes.needARoomList = result
                // alert(JSON.stringify(dl.changes.needARoomList))
                return { status: response.status, result: result }
            } else {
                return 'Something went wrong'
            }
        } catch (err) {
            // alert(JSON.stringify(err))
            return err
        }
    }
    dl.functions.getNeedAroom = getNeedAroom

    const getRoomDetails = async (roomId) => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
        }

        try {
            dl.functions.modalsPlugin.openModal('loading')
            var baseUrl = process.env.BASE_URL
            var response = await fetch(
                // `https://melody-mocktail-6tjz.api.neutrodev.com/user/rentalDetail?rentalId=${roomId}`,
                `${baseUrl}/user/rentalDetail?rentalId=${roomId}`,
                requestOptions
            )
            const res = await response.json()

            if (response.status == 200) {
                res[0]['age'] = res[0]['Age']

                var ownerDetail = 0
                if (res[0]['Age'] == 0) {
                    dl.changes.roomDetailsVisibleStatus.age = 'none'
                    ownerDetail = ownerDetail + 1
                } else {
                    res[0]['Age'] = res[0]['Age'] + ' ' + 'years'
                }

                if (res[0].occupation == '') {
                    dl.changes.roomDetailsVisibleStatus.occupation = 'none'
                    ownerDetail = ownerDetail + 1
                }

                if (res[0].languages.length > 0) {
                    res[0]['languagesArr'] = res[0].languages
                    var languages = []
                    for (var i = 0; i < res[0].languages.length; i++) {
                        var obj = {
                            value: res[0].languages[i],
                        }
                        languages.push(obj)
                    }
                    res[0]['languages'] = languages
                } else {
                    dl.changes.roomDetailsVisibleStatus.languagesKnown = 'none'
                    ownerDetail = ownerDetail + 1
                }

                if (ownerDetail == 3) {
                    dl.changes.roomDetailsVisibleStatus.ownerDetails = 'none'
                }

                if (res[0].negotiable == true) {
                    res[0]['negotiableVisible'] = 'flex'
                } else {
                    res[0]['negotiableVisible'] = 'none'
                }

                // if()

                res[0]['location'] =
                    res[0].exactAddress +
                    ', ' +
                    res[0].zipCode.city +
                    ',' +
                    res[0].zipCode.state
                res[0]['attachedBath'] =
                    res[0].attachedBath == true ? 'yes' : 'no'
                // res[0]["age"] = res[0].Age
                var postedBy = res[0].name ? res[0].name.split(' ') : ['', '']
                res[0]['postedBy'] = postedBy[0]

                res[0]['rent'] = res[0].preferedRent
                    ? '$' + res[0].preferedRent
                    : 'null'

                if (res[0].roomFurnishingRequired == '') {
                    dl.changes.roomDetailsVisibleStatus.roomFurnished = 'none'
                }

                // res[0]["startDate"] = res[0].availabilityFrom
                var date = new Date(res[0].availabilityFrom)
                var options = { year: 'numeric', month: 'long', day: 'numeric' }
                res[0]['availabilityFrom'] = date.toLocaleString(
                    undefined,
                    options
                )

                // res[0]["endDate"] = res[0].availabilityTo

                if (res[0].availabilityTo) {
                    var date = new Date(res[0].availabilityTo)
                    var options = {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    }
                    res[0]['availabilityTo'] = date.toLocaleString(
                        undefined,
                        options
                    )
                } else {
                    res[0]['availabilityTo'] = 'no data'
                }

                res[0]['pricemode'] = res[0].priceMode

                if (res[0].priceMode == 'Per day') {
                    res[0]['priceMode'] = '/Day'
                } else if (res[0].priceMode == 'Per week') {
                    res[0]['priceMode'] = '/Week'
                } else {
                    res[0]['priceMode'] = '/Month'
                }

                if (res[0].utilities) {
                    res[0]['utilitiesArr'] = res[0].utilities
                    var utilities = []
                    for (var i = 0; i < res[0].utilities.length; i++) {
                        var obj = {
                            value: res[0].utilities[i],
                        }
                        utilities.push(obj)
                    }
                    res[0]['utilities'] = utilities
                }

                if (res[0].amenities.length > 0) {
                    res[0]['amenitiesArr'] = res[0].amenities
                    var amenities = []
                    for (var i = 0; i < res[0].amenities.length; i++) {
                        var obj = {
                            value: res[0].amenities[i],
                        }
                        amenities.push(obj)
                    }
                    res[0]['amenities'] = amenities
                    dl.changes.roomDetailsVisibleStatus.amenities = 'flex'
                } else {
                    dl.changes.roomDetailsVisibleStatus.amenities = 'none'
                }

                var additionalinfo = 0
                if (res[0].vegPreference == '') {
                    dl.changes.roomDetailsVisibleStatus.vegPreference = 'none'
                    additionalinfo = additionalinfo + 1
                }

                if (res[0].smokingPolicy == '') {
                    dl.changes.roomDetailsVisibleStatus.smokingPolicy = 'none'
                    additionalinfo = additionalinfo + 1
                }

                if (res[0].petFriendly == '') {
                    dl.changes.roomDetailsVisibleStatus.petFriendly = 'none'
                    additionalinfo = additionalinfo + 1
                }

                if (additionalinfo == 3) {
                    dl.changes.roomDetailsVisibleStatus.additionalInfo = 'none'
                }

                if (res[0].files[0]) {
                    var imgarr = []

                    for (var i = 0; i < res[0].files.length; i++) {
                        var imgObj = {}
                        imgObj['url'] = 'url(' + res[0].files[i].url + ')'
                        imgarr.push(imgObj)
                    }
                    res[0]['images'] = imgarr
                } else {
                    res[0]['images'] = [
                        {
                            url: 'url(https://upscready.s3.ap-south-1.amazonaws.com/d374f4e9-f2b1-4ff0-96eb-e7036b73c12f.png)',
                        },
                        {
                            url: 'url(https://upscready.s3.ap-south-1.amazonaws.com/af927365-c74b-4c74-b10b-cc831226f1d6.png)',
                        },
                    ]
                }

                // dl.functions.viewsPlugin.showView("home")
                dl.changes.roomDetails = res[0]
                dl.functions.modalsPlugin.closeModal('loading')
                return { status: response.status, result: res[0], raw: res }
            } else {
                return 'Something went wrong'
            }
        } catch (err) {
            // alert(JSON.stringify(err))
            return err
        }
    }
    dl.functions.getRoomDetails = getRoomDetails

    const getNeedARoomDetails = async (roomId) => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
        }

        try {
            dl.functions.modalsPlugin.openModal('loading')
            var baseUrl = process.env.BASE_URL
            var response = await fetch(
                // `https://melody-mocktail-6tjz.api.neutrodev.com/user/needarentalDetail?rentalId=${roomId}`,
                `${baseUrl}/user/needarentalDetail?rentalId=${roomId}`,
                requestOptions
            )
            const res = await response.json()

            if (response.status == 200) {
                // dl.functions.viewsPlugin.showView("home")
                res[0]['location'] =
                    res[0].zipCode.city + ',' + res[0].zipCode.state
                res[0]['postedBy'] = res[0].name ? res[0].name : 'user'
                res[0]['attachedBath'] =
                    res[0].attachedBath == true ? 'yes' : 'no'

                res[0]['pricemode'] = res[0].pricemode

                if (res[0].pricemode == 'Per day') {
                    res[0]['priceMode'] = '/Day'
                } else if (res[0].pricemode == 'Per week') {
                    res[0]['priceMode'] = '/Week'
                } else {
                    res[0]['priceMode'] = '/Month'
                }

                var date = new Date(res[0].availabilityFrom)
                var options = { year: 'numeric', month: 'long', day: 'numeric' }
                res[0]['availabilityFrom'] = date.toLocaleString(
                    undefined,
                    options
                )

                if (res[0].availabilityTo) {
                    var date = new Date(res[0].availabilityTo)
                    var options = {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    }
                    res[0]['availabilityTo'] = date.toLocaleString(
                        undefined,
                        options
                    )
                } else {
                    res[0]['availabilityTo'] = 'no data'
                }

                res[0]['age'] = res[0]['Age']

                if (res[0]['Age'] == 0) {
                    dl.changes.needARoomDetailsVisibleStatus.age = 'none'
                }

                if (res[0].occupation == '') {
                    dl.changes.needARoomDetailsVisibleStatus.occupation = 'none'
                }

                if (res[0].languages > 0) {
                    res[0]['languagesArr'] = res[0].languages
                    var languages = []
                    for (var i = 0; i < res[0].languages.length; i++) {
                        var obj = {
                            value: res[0].languages[i],
                        }
                        languages.push(obj)
                    }
                    res[0]['languages'] = languages
                } else {
                    dl.changes.needARoomDetailsVisibleStatus.languagesKnown =
                        'none'
                }

                if (res[0].roomFurnishingRequired == '') {
                    dl.changes.needARoomDetailsVisibleStatus.roomFurnished =
                        'none'
                }

                if (res[0].utilities) {
                    res[0]['utilitiesArr'] = res[0].utilities
                    var utilities = []
                    for (var i = 0; i < res[0].utilities.length; i++) {
                        var obj = {
                            value: res[0].utilities[i],
                        }
                        utilities.push(obj)
                    }
                    res[0]['utilities'] = utilities
                }

                if (res[0].amenities > 0) {
                    res[0]['amenitiesArr'] = res[0].amenities
                    var amenities = []
                    for (var i = 0; i < res[0].amenities.length; i++) {
                        var obj = {
                            value: res[0].amenities[i],
                        }
                        amenities.push(obj)
                    }
                    res[0]['amenities'] = amenities
                } else {
                    dl.changes.needARoomDetailsVisibleStatus.amenities = 'none'
                }

                'Short term', 'Long term', 'Both'

                if (res[0].stayLeaseType == 'Short term') {
                    res[0]['stayLeaseType'] = 'Short term' + ' < 6 months'
                } else if (res[0].stayLeaseType == 'Long term') {
                    res[0]['stayLeaseType'] = 'Long term' + ' > 6 months'
                } else {
                    res[0]['stayLeaseType'] = 'Both' + ' no time limit'
                }

                var additionalinfo = 0
                if (res[0].vegPreference == '') {
                    dl.changes.needARoomDetailsVisibleStatus.vegPreference =
                        'none'
                    additionalinfo = additionalinfo + 1
                }

                if (res[0].smokingPolicy == '') {
                    dl.changes.needARoomDetailsVisibleStatus.smokingPolicy =
                        'none'
                    additionalinfo = additionalinfo + 1
                }

                if (res[0].petFriendly == '') {
                    dl.changes.needARoomDetailsVisibleStatus.petFriendly =
                        'none'
                    additionalinfo = additionalinfo + 1
                }

                if (additionalinfo == 3) {
                    dl.changes.needARoomDetailsVisibleStatus.additionalInfo =
                        'none'
                }

                dl.changes.needARoomDetails = res[0]
                // alert(JSON.stringify(dl.changes.needARoomDetails))
                dl.functions.modalsPlugin.closeModal('loading')
                return { status: response.status, result: res[0], raw: res }
            } else {
                return 'Something went wrong'
            }
        } catch (err) {
            // alert(JSON.stringify(err))
            return err
        }
    }
    dl.functions.getNeedARoomDetails = getNeedARoomDetails

    const getHomeDetails = async (homeId) => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
        }

        try {
            dl.functions.modalsPlugin.openModal('loading')
            var baseUrl = process.env.BASE_URL
            var response = await fetch(
                // `https://melody-mocktail-6tjz.api.neutrodev.com/user/rentalDetail?rentalId=${homeId}`,
                `${baseUrl}/user/rentalDetail?rentalId=${homeId}`,
                requestOptions
            )
            const res = await response.json()

            dl.functions.modalsPlugin.closeModal('loading')

            if (response.status == 200) {
                // dl.functions.viewsPlugin.showView("home")
                res[0]['location'] =
                    res[0].exactAddress +
                    ', ' +
                    res[0].zipCode.city +
                    ', ' +
                    res[0].zipCode.state
                res[0]['postedBy'] = res[0].name ? res[0].name : 'user'

                if (res[0].availabilityFrom) {
                    var date = new Date(res[0].availabilityFrom)
                    var options = {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    }
                    res[0]['availabilityFrom'] = date.toLocaleString(
                        undefined,
                        options
                    )
                } else {
                    res[0]['availabilityFrom'] = 'no data'
                }

                if (res[0].availabilityTo) {
                    var date = new Date(res[0].availabilityTo)
                    var options = {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    }
                    res[0]['availabilityTo'] = date.toLocaleString(
                        undefined,
                        options
                    )
                } else {
                    res[0]['availabilityTo'] = 'no data'
                }

                var ownerDetail = 0
                res[0]['age'] = res[0]['Age']
                if (res[0]['Age'] == 0) {
                    dl.changes.homeDetailsVisibleStatus.age = 'none'
                    ownerDetail = ownerDetail + 1
                }

                if (res[0].occupation == '') {
                    dl.changes.homeDetailsVisibleStatus.occupation = 'none'
                    ownerDetail = ownerDetail + 1
                }

                if (ownerDetail == 2) {
                    dl.changes.homeDetailsVisibleStatus.ownerDetails = 'none'
                }

                if (res[0].roomFurnishingRequired == '') {
                    dl.changes.homeDetailsVisibleStatus.roomFurnished = 'none'
                }

                if (res[0].utilities) {
                    res[0]['utilitiesArr'] = res[0].utilities
                    var utilities = []
                    for (var i = 0; i < res[0].utilities.length; i++) {
                        var obj = {
                            value: res[0].utilities[i],
                        }
                        utilities.push(obj)
                    }
                    res[0]['utilities'] = utilities
                    console.log(res[0]['utilities'])
                }
                res[0]['rent'] = res[0].preferedRent
                res[0]['preferredRent'] = '$' + res[0].preferedRent

                res[0]['pricemode'] = res[0].priceMode

                if (res[0].priceMode == 'Per day') {
                    res[0]['priceMode'] = '/Day'
                } else if (res[0].priceMode == 'Per week') {
                    res[0]['priceMode'] = '/Week'
                } else {
                    res[0]['priceMode'] = '/Month'
                }

                if (res[0].amenities > 0) {
                    res[0]['amenitiesArr'] = res[0].amenities
                    var amenities = []
                    for (var i = 0; i < res[0].amenities.length; i++) {
                        var obj = {
                            value: res[0].amenities[i],
                        }
                        amenities.push(obj)
                    }
                    res[0]['amenities'] = amenities
                } else {
                    dl.changes.homeDetailsVisibleStatus.amenities = 'none'
                }

                var additionalinfo = 0

                if (res[0].smokingPolicy == '') {
                    dl.changes.homeDetailsVisibleStatus.smokingPolicy = 'none'
                    additionalinfo = additionalinfo + 1
                }

                if (res[0].petFriendly == '') {
                    dl.changes.homeDetailsVisibleStatus.petFriendly = 'none'
                    additionalinfo = additionalinfo + 1
                }

                if (additionalinfo == 2) {
                    dl.changes.homeDetailsVisibleStatus.additionalInfo = 'none'
                }

                if (res[0].files[0]) {
                    var imgarr = []

                    for (var i = 0; i < res[0].files.length; i++) {
                        var imgObj = {}
                        imgObj['url'] = 'url(' + res[0].files[i].url + ')'
                        imgarr.push(imgObj)
                    }
                    res[0]['images'] = imgarr
                } else {
                    res[0]['images'] = [
                        {
                            url: 'url(https://thumbs.dreamstime.com/b/apartment-building-balconies-photoof-34869405.jpg)',
                        },
                        {
                            url: 'url(https://www.heatherhomes.in/wp-content/uploads/2020/04/casas-mas-caras-de-nueva-york-brooklyn1-1540893459-1-scaled.jpg)',
                        },
                    ]
                }

                dl.changes.homeDetails = res[0]
                // dl.changes.roomDetails = res[0];
                // alert(JSON.stringify(dl.changes.homeDetails))
                return { status: response.status, result: res[0], raw: res }
            } else {
                return 'Something went wrong'
            }
        } catch (err) {
            // alert(JSON.stringify(err))
            return err
        }
    }
    dl.functions.getHomeDetails = getHomeDetails

    const getNeedAHomeDetails = async (homeId) => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
        }

        try {
            dl.functions.modalsPlugin.openModal('loading')
            var baseUrl = process.env.BASE_URL
            var response = await fetch(
                // `https://melody-mocktail-6tjz.api.neutrodev.com/user/needarentalDetail?rentalId=${homeId}`,
                `${baseUrl}/user/needarentalDetail?rentalId=${homeId}`,
                requestOptions
            )
            const res = await response.json()

            dl.functions.modalsPlugin.closeModal('loading')

            if (response.status == 200) {
                // dl.functions.viewsPlugin.showView("home")
                res[0]['location'] =
                    res[0].exactAddress +
                    ', ' +
                    res[0].zipCode.city +
                    ', ' +
                    res[0].zipCode.state
                res[0]['postedBy'] = res[0].name ? res[0].name : 'user'

                if (res[0].utilities) {
                    res[0]['utilitiesArr'] = res[0].utilities
                    var utilities = []
                    for (var i = 0; i < res[0].utilities.length; i++) {
                        var obj = {
                            value: res[0].utilities[i],
                        }
                        utilities.push(obj)
                    }
                    res[0]['utilities'] = utilities
                }

                if (res[0].roomFurnishingRequired == '') {
                    dl.changes.needAhomeDetailsVisibleStatus.roomFurnished =
                        'none'
                }

                if (res[0].amenities > 0) {
                    res[0]['amenitiesArr'] = res[0].amenities
                    var amenities = []
                    for (var i = 0; i < res[0].amenities.length; i++) {
                        var obj = {
                            value: res[0].amenities[i],
                        }
                        amenities.push(obj)
                    }
                    res[0]['amenities'] = amenities
                } else {
                    dl.changes.needAhomeDetailsVisibleStatus.amenities = 'none'
                }

                if (res[0].stayLeaseType == 'Short term') {
                    res[0]['stayLeaseType'] = 'Short term' + ' < 6 months'
                } else if (res[0].stayLeaseType == 'Long term') {
                    res[0]['stayLeaseType'] = 'Long term' + ' > 6 months'
                } else {
                    res[0]['stayLeaseType'] = 'Both' + ' no time limit'
                }

                var additionalinfo = 0

                if (res[0].smokingPolicy == '') {
                    dl.changes.needAhomeDetailsVisibleStatus.smokingPolicy =
                        'none'
                    additionalinfo = additionalinfo + 1
                }

                if (res[0].petFriendly == '') {
                    dl.changes.needAhomeDetailsVisibleStatus.petFriendly =
                        'none'
                    additionalinfo = additionalinfo + 1
                }

                if (additionalinfo == 2) {
                    dl.changes.needAhomeDetailsVisibleStatus.additionalInfo =
                        'none'
                }

                dl.changes.needAHomeDetails = res[0]
                // alert(JSON.stringify(dl.changes.needAHomeDetails))
                return { status: response.status, result: res[0], raw: res }
            } else {
                return 'Something went wrong'
            }
        } catch (err) {
            // alert(JSON.stringify(err))
            return err
        }
    }
    dl.functions.getNeedAHomeDetails = getNeedAHomeDetails

    const getLatestRental = async () => {
        var filters = {}
        var myHeaders = new Headers()

        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)

        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
        }

        if (userToken) {
            requestOptions.headers = myHeaders
        }

        try {
            dl.functions.modalsPlugin.openModal('loading')
            let posting = 'Newest to Oldest'

            var distance = filters['Distance'] ? filters['Distance'] : ''
            var rentalType = filters['Rental Type']
                ? filters['Rental Type']
                : ''
            if (filters['Rental Type']) {
                dl.changes.rentalType = filters['Rental Type']
            }
            var type = filters.Type ? filters.Type : ''
            var leaseType = filters['Lease type'] ? filters['Lease type'] : ''
            var noOfPeople = filters['No. of people']
                ? filters['No. of people']
                : ''
            var amenities = filters.Amenities ? filters.Amenities : ''
            var smokingPolicy = filters['smoking policy']
                ? filters['smoking policy']
                : ''
            var petFriendly = filters['pet friendly']
                ? filters['pet friendly']
                : ''
            var attachedBath = filters['Attached bathroom']
                ? filters['Attached bathroom']
                : ''
            var preferedGender = filters['preferred gender']
                ? filters['preferred gender']
                : ''
            var priceMode = filters['Price mode'] ? filters['Price mode'] : ''

            var priceRange = filters['Price Range']
                ? filters['Price Range']
                : ''
            if (priceRange == 'Lowest to Highest') {
                priceRange = 'asc'
            } else if (priceRange == 'Highest to Lowest') {
                priceRange = 'des'
            } else {
                priceRange = ''
            }

            let page = 1
            var zipcode = dl.changes.userDetail.zipCode
                ? dl.changes.userDetail.zipCode
                : '00601'

            var baseUrl = process.env.BASE_URL
            const response = await fetch(
                // `https://melody-mocktail-6tjz.api.neutrodev.com/user/rentals?zipcode=${zipcode}&limit=9&page=${page}&type=${type}&leaseType=${leaseType}&noOfPeople=${noOfPeople}&amenities=${amenities}&smokingPolicy=${smokingPolicy}&petFriendly=${petFriendly}&attachedBath=${attachedBath}&preferedGender=${preferedGender}&priceRange=${priceRange}&priceMode=${priceMode}&rentalType=${rentalType}&distance=${distance}&posting=${posting}`,
                `${baseUrl}/user/rentals?zipcode=${zipcode}&limit=9&page=${page}&type=${type}&leaseType=${leaseType}&noOfPeople=${noOfPeople}&amenities=${amenities}&smokingPolicy=${smokingPolicy}&petFriendly=${petFriendly}&attachedBath=${attachedBath}&preferedGender=${preferedGender}&priceRange=${priceRange}&priceMode=${priceMode}&rentalType=${rentalType}&distance=${distance}&posting=${posting}`,
                requestOptions
            )

            const res = await response.json()
            dl.functions.modalsPlugin.closeModal('loading')
            if (res[0].result.length == 0) {
                // dl.changes.rentelNodataVisible = {
                //     display: 'flex',
                // }
                // dl.changes.paginationState.total = 0
                // dl.changes.paginationState.active = 0
                dl.changes.latestHomeRental = []
                return
            }

            dl.changes.paginationState.total = Math.ceil(
                res[0].count.totalCount / 9
            )
            dl.changes.paginationState.active = Number(page)

            var result = res[0].result
            if (response.status == 200) {
                for (var i = 0; i < res[0].result.length; i++) {
                    let priceMode = result[i].priceMode
                    if (priceMode) {
                        priceMode = priceMode.split(' ')[1]
                    }
                    // result[i]["rent"] = "$" + result[i].preferedRent + "/" + priceMode;
                    if (result[i].rentalType == 'Home') {
                        result[i]['rent'] =
                            '$' + result[i].preferedRent + '/' + priceMode
                    } else {
                        result[i]['rent'] =
                            '$' + result[i].preferedRent + '/' + priceMode
                    }

                    result[i]['location'] =
                        result[i].zipCode.city + ',' + result[i].zipCode.state
                    // result[i]["price"] = result[i].preferredRent
                    result[i]['AdType'] = 'Offered'
                    var postedBy = result[i].name
                        ? result[i].name.split(' ')
                        : ['user']
                    var postedOn = new Date(result[i].cOn)
                    const year = postedOn.getFullYear()
                    const month = (postedOn.getMonth() + 1)
                        .toString()
                        .padStart(2, '0')
                    const day = postedOn.getDate().toString().padStart(2, '0')
                    const formattedDate = `${month}-${day}-${year}`
                    result[i]['postedBy'] = postedBy[0] + ' on ' + formattedDate
                    // result[i]["postedBy"] = result[i].name ? result[i].name : "user"
                    // result[i]["rent"] = result[i].preferedRent ? "$"+result[i].preferedRent + ' ' + result[i].priceMode: "null"
                    var date = new Date(result[i].availabilityFrom)
                    var options = {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    }
                    result[i]['availabilityFrom'] = date.toLocaleString(
                        undefined,
                        options
                    )

                    var date = new Date(result[i].availabilityTo)
                    var options = {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    }
                    result[i]['availabilityTo'] = date.toLocaleString(
                        undefined,
                        options
                    )

                    if (result[i].promotion.status == 'true') {
                        result[i]['mmReferalVisible'] = 'flex'
                    } else {
                        result[i]['mmReferalVisible'] = 'none'
                    }

                    if (result[i].files[0]) {
                        result[i]['image'] =
                            'url(' + result[i].files[0].url + ')'
                    } else {
                        result[i]['image'] =
                            'url(https://www.home-designing.com/wp-content/uploads/2018/05/stylish-mid-century-style-green-living-room.jpg)'
                    }

                    if (result[i].isBookmarked == true) {
                        result[i]['bookmarkactive'] = 'flex'
                        result[i]['bookmarkinactive'] = 'none'
                    } else {
                        result[i]['bookmarkactive'] = 'none'
                        result[i]['bookmarkinactive'] = 'flex'
                    }
                    result[i]['promotionVisible'] = 'none'
                    result[i]['EditDeleteVisible'] = 'none'
                    result[i]['promotionDateVisible'] = 'none'
                    result[i]['contactVisible'] = 'flex'
                }
                // dl.functions.viewsPlugin.showView("home")

                dl.changes.latestHomeRental = result
                // alert(JSON.stringify(dl.changes.roomsList))
                return { status: response.status, result: result }
            }
        } catch (err) {
            return err
        }
    }
    dl.functions.getLatestRental = getLatestRental

    const applyRoomFilter = async (page) => {
        var filters = {}

        var filterobj = dl.changes.offeredroomFilter
        for (var i = 0; i < filterobj.length; i++) {
            var filtername = filterobj[i].filterName
            if (filterobj[i].multi == true) {
                filters[filtername] = []
            }

            var options = filterobj[i].options
            for (var j = 0; j < options.length; j++) {
                if (options[j].selected == true && filterobj[i].multi == true) {
                    filters[filtername].push(options[j].name)
                } else if (
                    options[j].selected == true &&
                    filterobj[i].multi == false
                ) {
                    filters[filtername] = options[j].name
                }
            }
        }

        var myHeaders = new Headers()

        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)

        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
        }

        if (userToken) {
            requestOptions.headers = myHeaders
        }

        try {
            dl.functions.modalsPlugin.openModal('loading')
            let posting = filters['Posting'] ? filters['Posting'] : ''
            var distance = filters['Distance'] ? filters['Distance'] : ''
            var rentalType = filters['Rental Type']
                ? filters['Rental Type']
                : ''
            if (filters['Rental Type']) {
                dl.changes.rentalType = filters['Rental Type']
            }
            var type = filters.Type ? filters.Type : ''
            var leaseType = filters['Lease type'] ? filters['Lease type'] : ''
            var noOfPeople = filters['No. of people']
                ? filters['No. of people']
                : ''
            var amenities = filters.Amenities ? filters.Amenities : ''
            var smokingPolicy = filters['smoking policy']
                ? filters['smoking policy']
                : ''
            var petFriendly = filters['pet friendly']
                ? filters['pet friendly']
                : ''
            var attachedBath = filters['Attached bathroom']
                ? filters['Attached bathroom']
                : ''
            var preferedGender = filters['preferred gender']
                ? filters['preferred gender']
                : ''
            var priceMode = filters['Price mode'] ? filters['Price mode'] : ''

            var priceRange = filters['Price Range']
                ? filters['Price Range']
                : ''
            if (priceRange == 'Lowest to Highest') {
                priceRange = 'asc'
            } else if (priceRange == 'Highest to Lowest') {
                priceRange = 'des'
            } else {
                priceRange = ''
            }

            if (!page) {
                page = 1
            } else if (dl.changes.paginationState.active) {
                page = dl.changes.paginationState.active
            }
            var zipcode = dl.changes.userDetail.zipCode
                ? dl.changes.userDetail.zipCode
                : '00601'

            var search = ''
            if (dl.changes.roomSearchText.length > 1) {
                if (dl.changes.RentalsearchZipcode.length > 1) {
                    // search = dl.changes.RentalsearchZipcode
                    if (distance.length > 1) {
                        search = ''
                    } else {
                        distance = '5 miles'
                    }
                    zipcode = dl.changes.RentalsearchZipcode
                } else {
                    search = dl.changes.roomSearchText
                }
            }

            var baseUrl = process.env.BASE_URL
            const response = await fetch(
                // `https://melody-mocktail-6tjz.api.neutrodev.com/user/rentals?zipcode=${zipcode}&limit=9&page=${page}&type=${type}&leaseType=${leaseType}&noOfPeople=${noOfPeople}&amenities=${amenities}&smokingPolicy=${smokingPolicy}&petFriendly=${petFriendly}&attachedBath=${attachedBath}&preferedGender=${preferedGender}&priceRange=${priceRange}&priceMode=${priceMode}&rentalType=${rentalType}&distance=${distance}&posting=${posting}`,
                `${baseUrl}/user/rentals?zipcode=${zipcode}&limit=9&page=${page}&type=${type}&leaseType=${leaseType}&noOfPeople=${noOfPeople}&amenities=${amenities}&smokingPolicy=${smokingPolicy}&petFriendly=${petFriendly}&attachedBath=${attachedBath}&preferedGender=${preferedGender}&priceRange=${priceRange}&priceMode=${priceMode}&rentalType=${rentalType}&distance=${distance}&posting=${posting}&search=${search}`,
                requestOptions
            )

            const res = await response.json()
            dl.functions.modalsPlugin.closeModal('loading')
            if (res[0].result.length == 0) {
                dl.changes.rentelNodataVisible = {
                    display: 'flex',
                }
                dl.changes.paginationState.total = 0
                dl.changes.paginationState.active = 0
                dl.changes.roomsList = []
                return
            } else {
                dl.changes.rentelNodataVisible = {
                    display: 'none',
                }
            }

            dl.changes.paginationState.total = Math.ceil(
                res[0].count.totalCount / 9
            )
            dl.changes.paginationState.active = Number(page)

            var result = res[0].result
            if (response.status == 200) {
                for (var i = 0; i < res[0].result.length; i++) {
                    let priceMode = result[i].priceMode
                    if (priceMode) {
                        priceMode = priceMode.split(' ')[1]
                    }
                    // result[i]["rent"] = "$" + result[i].preferedRent + "/" + priceMode;
                    if (result[i].rentalType == 'Home') {
                        result[i]['rent'] =
                            '$' +
                            (result[i].preferredRent
                                ? result[i].preferredRent
                                : result[i].preferedRent) +
                            '/' +
                            priceMode
                    } else {
                        result[i]['rent'] =
                            '$' + result[i].preferedRent + '/' + priceMode
                    }

                    result[i]['location'] =
                        result[i].zipCode.city + ',' + result[i].zipCode.state
                    // result[i]["price"] = result[i].preferredRent
                    result[i]['AdType'] = 'Offered'
                    var postedBy = result[i].name
                        ? result[i].name.split(' ')
                        : ['user']
                    var postedOn = new Date(result[i].cOn)
                    const year = postedOn.getFullYear()
                    const month = (postedOn.getMonth() + 1)
                        .toString()
                        .padStart(2, '0')
                    const day = postedOn.getDate().toString().padStart(2, '0')
                    const formattedDate = `${month}-${day}-${year}`
                    result[i]['postedBy'] = postedBy[0] + ' on ' + formattedDate
                    // result[i]["postedBy"] = result[i].name ? result[i].name : "user"
                    // result[i]["rent"] = result[i].preferedRent ? "$"+result[i].preferedRent + ' ' + result[i].priceMode: "null"
                    var date = new Date(result[i].availabilityFrom)
                    var options = {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    }
                    result[i]['availabilityFrom'] = date.toLocaleString(
                        undefined,
                        options
                    )

                    var date = new Date(result[i].availabilityTo)
                    var options = {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    }
                    result[i]['availabilityTo'] = date.toLocaleString(
                        undefined,
                        options
                    )

                    if (result[i].promotion.status == 'true') {
                        result[i]['mmReferalVisible'] = 'flex'
                    } else {
                        result[i]['mmReferalVisible'] = 'none'
                    }

                    if (result[i].files[0]) {
                        result[i]['image'] =
                            'url(' + result[i].files[0].url + ')'
                    } else {
                        result[i]['image'] =
                            'url(https://www.home-designing.com/wp-content/uploads/2018/05/stylish-mid-century-style-green-living-room.jpg)'
                    }

                    if (result[i].isBookmarked == true) {
                        result[i]['bookmarkactive'] = 'flex'
                        result[i]['bookmarkinactive'] = 'none'
                    } else {
                        result[i]['bookmarkactive'] = 'none'
                        result[i]['bookmarkinactive'] = 'flex'
                    }
                    result[i]['promotionVisible'] = 'none'
                    result[i]['EditDeleteVisible'] = 'none'
                    result[i]['promotionDateVisible'] = 'none'
                    result[i]['contactVisible'] = 'flex'
                }
                // dl.functions.viewsPlugin.showView("home")

                dl.changes.roomsList = result
                // dl.changes.roomSearchText = ''

                // alert(JSON.stringify(dl.changes.roomsList))
                return { status: response.status, result: result }
            }
        } catch (err) {
            return err
        }
    }
    dl.functions.applyRoomFilter = applyRoomFilter

    const applyNeedARoomFilter = async (page) => {
        var filters = {}

        var filterobj = dl.changes.wantedroomFilter
        for (var i = 0; i < filterobj.length; i++) {
            var filtername = filterobj[i].filterName
            if (filterobj[i].multi == true) {
                filters[filtername] = []
            }

            var options = filterobj[i].options
            for (var j = 0; j < options.length; j++) {
                if (options[j].selected == true && filterobj[i].multi == true) {
                    filters[filtername].push(options[j].name)
                } else if (
                    options[j].selected == true &&
                    filterobj[i].multi == false
                ) {
                    filters[filtername] = options[j].name
                }
            }
        }

        var myHeaders = new Headers()

        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)

        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
        }

        if (userToken) {
            requestOptions.headers = myHeaders
        }

        try {
            dl.functions.modalsPlugin.openModal('loading')
            let posting = filters['Posting'] ? filters['Posting'] : ''
            var distance = filters['Distance'] ? filters['Distance'] : ''
            var type = filters.Type ? filters.Type : ''
            var rentalType = filters['Rental Type']
                ? filters['Rental Type']
                : ''
            if (filters['Rental Type']) {
                dl.changes.needARentalType = filters['Rental Type']
            }

            var leaseType = filters['Lease type'] ? filters['Lease type'] : ''
            var noOfPeople = filters['No. of people']
                ? filters['No. of people']
                : ''
            var amenities = filters.Amenities ? filters.Amenities : ''
            var smokingPolicy = filters['smoking policy']
                ? filters['smoking policy']
                : ''
            var petFriendly = filters['pet friendly']
                ? filters['pet friendly']
                : ''
            var priceMode = filters['Price mode'] ? filters['Price mode'] : ''
            var attachedBath = filters['Attached bathroom']
                ? filters['Attached bathroom']
                : ''
            var preferedGender = filters['preferred gender']
                ? filters['preferred gender']
                : ''
            if (!page) {
                page = 1
            }
            dl.changes.paginationState.active = Number(page)

            var zipcode = dl.changes.userDetail.zipCode
                ? dl.changes.userDetail.zipCode
                : '00601'

            var search = ''
            if (dl.changes.needARoomSearchText.length > 1) {
                if (dl.changes.RentalsearchZipcode.length > 1) {
                    // search = dl.changes.RentalsearchZipcode
                    if (distance.length > 1) {
                        search = ''
                    } else {
                        distance = '5 miles'
                    }
                    zipcode = dl.changes.RentalsearchZipcode
                } else {
                    search = dl.changes.needARoomSearchText
                }
            }

            var baseUrl = process.env.BASE_URL
            const response = await fetch(
                // `https://melody-mocktail-6tjz.api.neutrodev.com/user/needarental?zipcode=${zipcode}&limit=9&page=${page}&type=${type}&leaseType=${leaseType}&noOfPeople=${noOfPeople}&amenities=${amenities}&smokingPolicy=${smokingPolicy}&petFriendly=${petFriendly}&attachedBath=${attachedBath}&preferedGender=${preferedGender}&priceMode=${priceMode}&rentalType=${rentalType}&distance=${distance}&posting=${posting}`,
                `${baseUrl}/user/needarental?zipcode=${zipcode}&limit=9&page=${page}&type=${type}&leaseType=${leaseType}&noOfPeople=${noOfPeople}&amenities=${amenities}&smokingPolicy=${smokingPolicy}&petFriendly=${petFriendly}&attachedBath=${attachedBath}&preferedGender=${preferedGender}&priceMode=${priceMode}&rentalType=${rentalType}&distance=${distance}&posting=${posting}&search=${search}`,
                requestOptions
            )
            const res = await response.json()
            dl.functions.modalsPlugin.closeModal('loading')
            if (res[0].result.length == 0) {
                dl.changes.rentelNodataVisible = {
                    display: 'flex',
                }
                dl.changes.paginationState.total = 0
                dl.changes.paginationState.active = 0
                dl.changes.needARoomList = []
                return
            } else {
                dl.changes.rentelNodataVisible = {
                    display: 'none',
                }
            }

            dl.changes.paginationState.total = Math.ceil(
                res[0].count.totalCount / 8
            )
            dl.changes.paginationState.active = Number(page)
            var result = res[0].result
            if (response.status == 200) {
                for (var i = 0; i < res[0].result.length; i++) {
                    result[i]['location'] =
                        result[i].zipCode.city + ',' + result[i].zipCode.state
                    // result[i]["price"] = "100"
                    result[i]['AdType'] = 'wanted'
                    var postedBy = result[i].name
                        ? result[i].name.split(' ')
                        : ['user']
                    var postedOn = new Date(result[i].cOn)
                    const year = postedOn.getFullYear()
                    const month = (postedOn.getMonth() + 1)
                        .toString()
                        .padStart(2, '0')
                    const day = postedOn.getDate().toString().padStart(2, '0')
                    const formattedDate = `${month}-${day}-${year}`
                    result[i]['postedBy'] = postedBy[0] + ' on ' + formattedDate
                    // result[i]["postedBy"] = result[i].userDetail[0]?result[i].userDetail[0].name:"user"

                    var date = new Date(result[i].availabilityFrom)
                    var options = {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    }
                    result[i]['availabilityFrom'] = date.toLocaleString(
                        undefined,
                        options
                    )

                    var date = new Date(result[i].availabilityTo)
                    var options = {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    }
                    result[i]['availabilityTo'] = date.toLocaleString(
                        undefined,
                        options
                    )

                    if (result[i].promotion.status == 'true') {
                        result[i]['mmReferalVisible'] = 'flex'
                    } else {
                        result[i]['mmReferalVisible'] = 'none'
                    }

                    if (result[i].isBookmarked == true) {
                        result[i]['bookmarkactive'] = 'flex'
                        result[i]['bookmarkinactive'] = 'none'
                    } else {
                        result[i]['bookmarkactive'] = 'none'
                        result[i]['bookmarkinactive'] = 'flex'
                    }
                    result[i]['promotionVisible'] = 'none'
                    result[i]['EditDeleteVisible'] = 'none'
                    result[i]['promotionDateVisible'] = 'none'
                    result[i]['contactVisible'] = 'flex'
                }
                // dl.functions.viewsPlugin.showView("home")
                dl.changes.needARoomList = result
                // alert(JSON.stringify(dl.changes.needARoomList))
                return { status: response.status, result: result }
            } else {
                return 'Something went wrong'
            }
        } catch (err) {
            return err
        }
    }
    dl.functions.applyNeedARoomFilter = applyNeedARoomFilter

    const applyOfferedHomeFilter = async (page) => {
        var filters = {}

        var filterobj = dl.changes.offeredHomeFilter
        for (var i = 0; i < filterobj.length; i++) {
            var filtername = filterobj[i].filterName
            if (filterobj[i].multi == true) {
                filters[filtername] = []
            }

            var options = filterobj[i].options
            for (var j = 0; j < options.length; j++) {
                if (options[j].selected == true && filterobj[i].multi == true) {
                    filters[filtername].push(options[j].name)
                } else if (
                    options[j].selected == true &&
                    filterobj[i].multi == false
                ) {
                    filters[filtername] = options[j].name
                }
            }
        }

        var myHeaders = new Headers()

        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)

        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
        }

        if (userToken) {
            requestOptions.headers = myHeaders
        }

        try {
            dl.functions.modalsPlugin.openModal('loading')
            var type = filters['Home Type'] ? filters['Home Type'] : ''
            var leaseType = filters['Lease type'] ? filters['Lease type'] : ''

            var petFriendly = filters['pet friendly']
                ? filters['pet friendly']
                : ''

            var priceRange = filters['Price Range']
                ? filters['Price Range']
                : ''
            if (priceRange == 'Lowest to Highest') {
                priceRange = 'asc'
            } else if (priceRange == 'Highest to Lowest') {
                priceRange = 'des'
            } else {
                priceRange = ''
            }

            if (!page) {
                page = 1
            }

            var zipcode = dl.changes.userDetail.zipCode
                ? dl.changes.userDetail.zipCode
                : '00601'

            var baseUrl = process.env.BASE_URL
            const response = await fetch(
                // `https://melody-mocktail-6tjz.api.neutrodev.com/user/homes?zipcode=${zipcode}&limit=8&page=${page}&type=${type}&leaseType=${leaseType}&petFriendly=${petFriendly}&priceRange=${priceRange}`,
                `${baseUrl}/user/homes?zipcode=${zipcode}&limit=8&page=${page}&type=${type}&leaseType=${leaseType}&petFriendly=${petFriendly}&priceRange=${priceRange}`,
                requestOptions
            )
            const res = await response.json()
            dl.functions.modalsPlugin.closeModal('loading')
            if (res[0].result.length == 0) {
                dl.changes.rentelNodataVisible = {
                    display: 'flex',
                }
                dl.changes.paginationState.total = 0
                dl.changes.paginationState.active = 0
                dl.changes.homeRentelsList = []
                return
            } else {
                dl.changes.rentelNodataVisible = {
                    display: 'none',
                }
            }

            dl.changes.paginationState.total = Math.ceil(
                res[0].count.totalCount / 9
            )
            dl.changes.paginationState.active = Number(page)

            var result = res[0].result

            if (response.status == 200) {
                for (var i = 0; i < res[0].result.length; i++) {
                    let priceMode = result[i].priceMode
                    if (priceMode) {
                        priceMode = priceMode.split(' ')[1]
                    }
                    result[i]['price'] =
                        '$' + result[i].preferredRent + '/' + priceMode
                    result[i]['location'] =
                        result[i].zipCode.city + ',' + result[i].zipCode.state
                    result[i]['AdType'] = 'Offered'
                    var postedBy = result[i].name
                        ? result[i].name.split(' ')
                        : 'user'
                    var postedOn = new Date(result[i].cOn)
                    const year = postedOn.getFullYear()
                    const month = (postedOn.getMonth() + 1)
                        .toString()
                        .padStart(2, '0')
                    const day = postedOn.getDate().toString().padStart(2, '0')
                    const formattedDate = `${month}-${day}-${year}`
                    result[i]['postedBy'] = postedBy + ' on ' + formattedDate
                    // result[i]["postedBy"] = result[i].userDetail[0] ? result[i].userDetail[0].name : "user"

                    var date = new Date(result[i].availabilityFrom)
                    var options = {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    }
                    result[i]['availabilityFrom'] = date.toLocaleString(
                        undefined,
                        options
                    )

                    var date = new Date(result[i].availabilityTo)
                    var options = {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    }
                    result[i]['availabilityTo'] = date.toLocaleString(
                        undefined,
                        options
                    )

                    if (result[i].promotion.status == 'true') {
                        result[i]['mmReferalVisible'] = 'flex'
                    } else {
                        result[i]['mmReferalVisible'] = 'none'
                    }

                    if (result[i].files[0]) {
                        result[i]['image'] =
                            'url(' + result[i].files[0].url + ')'
                    } else {
                        result[i]['image'] =
                            'url(https://thumbs.dreamstime.com/b/apartment-building-balconies-photoof-34869405.jpg)'
                    }

                    if (result[i].isBookmarked == true) {
                        result[i]['bookmarkactive'] = 'flex'
                        result[i]['bookmarkinactive'] = 'none'
                    } else {
                        result[i]['bookmarkactive'] = 'none'
                        result[i]['bookmarkinactive'] = 'flex'
                    }

                    result[i]['promotionVisible'] = 'none'
                    result[i]['EditDeleteVisible'] = 'none'
                    result[i]['promotionDateVisible'] = 'none'
                    result[i]['contactVisible'] = 'flex'
                }
                dl.changes.homeRentelsList = result
                dl.changes.rentelHomeSearchText = ''
                return { status: response.status, result: result }
            } else {
                return 'Something went wrong'
            }
        } catch (err) {
            return err
        }
    }
    dl.functions.applyOfferedHomeFilter = applyOfferedHomeFilter

    const applyNeddAHomeFilter = async (page) => {
        var filters = {}

        var filterobj = dl.changes.needAHomeFilter
        for (var i = 0; i < filterobj.length; i++) {
            var filtername = filterobj[i].filterName
            if (filterobj[i].multi == true) {
                filters[filtername] = []
            }

            var options = filterobj[i].options
            for (var j = 0; j < options.length; j++) {
                if (options[j].selected == true && filterobj[i].multi == true) {
                    filters[filtername].push(options[j].name)
                } else if (
                    options[j].selected == true &&
                    filterobj[i].multi == false
                ) {
                    filters[filtername] = options[j].name
                }
            }
        }

        var myHeaders = new Headers()

        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)

        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
        }

        if (userToken) {
            requestOptions.headers = myHeaders
        }

        try {
            dl.functions.modalsPlugin.openModal('loading')
            var leaseType = filters['Lease type'] ? filters['Lease type'] : ''
            var noOfPeople = filters['No. of people']
                ? filters['No. of people']
                : ''
            var amenities = filters.Amenities ? filters.Amenities : ''
            var smokingPolicy = filters['smoking policy']
                ? filters['smoking policy']
                : ''
            var petFriendly = filters['pet friendly']
                ? filters['pet friendly']
                : ''
            if (!page) {
                page = 1
            }

            var zipcode = dl.changes.userDetail.zipCode
                ? dl.changes.userDetail.zipCode
                : '00601'
            var baseUrl = process.env.BASE_URL
            const response = await fetch(
                // `https://melody-mocktail-6tjz.api.neutrodev.com/user/needAHomes?zipcode=${zipcode}&limit=9&page=${page}&leaseType=${leaseType}&noOfPeople=${noOfPeople}&amenities=${amenities}&smokingPolicy=${smokingPolicy}&petFriendly=${petFriendly}`,
                `${baseUrl}/user/needAHomes?zipcode=${zipcode}&limit=9&page=${page}&leaseType=${leaseType}&noOfPeople=${noOfPeople}&amenities=${amenities}&smokingPolicy=${smokingPolicy}&petFriendly=${petFriendly}`,
                requestOptions
            )
            const res = await response.json()
            dl.functions.modalsPlugin.closeModal('loading')
            if (res[0].result.length == 0) {
                dl.changes.rentelNodataVisible = {
                    display: 'flex',
                }
                dl.changes.paginationState.total = 0
                dl.changes.paginationState.active = 0
                dl.changes.needAHomeList = []
                return
            } else {
                dl.changes.rentelNodataVisible = {
                    display: 'none',
                }
            }

            dl.changes.paginationState.total = Math.ceil(
                res[0].count.totalCount / 8
            )
            dl.changes.paginationState.active = Number(page)

            var result = res[0].result

            if (response.status == 200) {
                for (var i = 0; i < res[0].result.length; i++) {
                    result[i]['location'] =
                        result[i].zipCode.city + ',' + result[i].zipCode.state
                    result[i]['AdType'] = 'wanted'

                    var postedBy = result[i].name
                        ? result[i].name.split(' ')
                        : ['user']
                    var postedOn = new Date(result[i].cOn)
                    const year = postedOn.getFullYear()
                    const month = (postedOn.getMonth() + 1)
                        .toString()
                        .padStart(2, '0')
                    const day = postedOn.getDate().toString().padStart(2, '0')
                    const formattedDate = `${month}-${day}-${year}`
                    result[i]['postedBy'] = postedBy[0] + ' on ' + formattedDate
                    // result[i]["postedBy"] = result[i].userDetail[0] ? result[i].userDetail[0].name : "user"

                    var date = new Date(result[i].neededBy)
                    var options = {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    }
                    result[i]['neededBy'] = date.toLocaleString(
                        undefined,
                        options
                    )

                    if (result[i].promotion.status == 'true') {
                        result[i]['mmReferalVisible'] = 'flex'
                    } else {
                        result[i]['mmReferalVisible'] = 'none'
                    }

                    if (result[i].isBookmarked == true) {
                        result[i]['bookmarkactive'] = 'flex'
                        result[i]['bookmarkinactive'] = 'none'
                    } else {
                        result[i]['bookmarkactive'] = 'none'
                        result[i]['bookmarkinactive'] = 'flex'
                    }
                    result[i]['contactVisible'] = 'flex'
                    result[i]['promotionVisible'] = 'none'
                    result[i]['EditDeleteVisible'] = 'none'
                    result[i]['promotionDateVisible'] = 'none'
                }
                dl.changes.needAHomeList = result
                return { status: response.status, result: result }
            } else {
                return 'Something went wrong'
            }
        } catch (err) {
            return err
        }
    }
    dl.functions.applyNeddAHomeFilter = applyNeddAHomeFilter

    const serachRooms = async (key, page) => {
        var myHeaders = new Headers()

        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)

        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
        }

        if (userToken) {
            requestOptions.headers = myHeaders
        }

        try {
            dl.functions.modalsPlugin.openModal('loading')
            // dl.changes.paginationState.active = 1
            // let page = dl.changes.paginationState.active
            var baseUrl = process.env.BASE_URL
            var response = await fetch(
                // `https://melody-mocktail-6tjz.api.neutrodev.com/user/searchRentals?search=${key}&limit=9&page=${page}`,
                `${baseUrl}/user/searchRentals?search=${key}&limit=9&page=${page}`,
                requestOptions
            )
            const res = await response.json()

            if (res.result.length == 0) {
                dl.changes.rentelNodataVisible = {
                    display: 'flex',
                }
                dl.changes.paginationState.total = 0
                dl.changes.paginationState.active = 0
                dl.changes.roomsList = []
                dl.functions.resetFilter('offeredroomFilter')
                dl.functions.modalsPlugin.closeModal('loading')
                return
            } else {
                dl.changes.rentelNodataVisible = {
                    display: 'none',
                }
            }
            dl.changes.paginationState.total = res.totalPage
            // dl.changes.paginationState.active = 1
            var result = res.result
            if (response.status == 200) {
                for (var i = 0; i < res.result.length; i++) {
                    let priceMode = result[i].priceMode
                    if (priceMode) {
                        priceMode = priceMode.split(' ')[1]
                    }

                    if (result[i].rentalType == 'Home') {
                        result[i]['rent'] =
                            '$' + result[i].preferredRent + '/' + priceMode
                    } else {
                        result[i]['rent'] =
                            '$' + result[i].preferedRent + '/' + priceMode
                    }
                    result[i]['location'] =
                        result[i].zipCode.city + ',' + result[i].zipCode.state
                    // result[i]["price"] = result[i].preferredRent
                    result[i]['AdType'] = 'Offered'

                    // POSTED By
                    var postedBy = result[i].name
                        ? result[i].name.split(' ')
                        : ['user']
                    var postedOn = new Date(result[i].cOn)
                    const year = postedOn.getFullYear()
                    const month = (postedOn.getMonth() + 1)
                        .toString()
                        .padStart(2, '0')
                    const day = postedOn.getDate().toString().padStart(2, '0')
                    const formattedDate = `${month}-${day}-${year}`
                    result[i]['postedBy'] = postedBy[0] + ' on ' + formattedDate

                    // result[i]["rent"] = result[i].preferedRent ? "$"+result[i].preferedRent+ ' ' + result[i].priceMode : "null"
                    var date = new Date(result[i].availabilityFrom)
                    var options = {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    }
                    result[i]['availabilityFrom'] = date.toLocaleString(
                        undefined,
                        options
                    )

                    var date = new Date(result[i].availabilityTo)
                    var options = {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    }
                    result[i]['availabilityTo'] = date.toLocaleString(
                        undefined,
                        options
                    )

                    if (result[i].promotion.status == 'true') {
                        result[i]['mmReferalVisible'] = 'flex'
                    } else {
                        result[i]['mmReferalVisible'] = 'none'
                    }

                    if (result[i].files[0]) {
                        result[i]['image'] =
                            'url(' + result[i].files[0].url + ')'
                    } else {
                        result[i]['image'] =
                            'url(https://www.home-designing.com/wp-content/uploads/2018/05/stylish-mid-century-style-green-living-room.jpg)'
                    }

                    if (result[i].isBookmarked == true) {
                        result[i]['bookmarkactive'] = 'flex'
                        result[i]['bookmarkinactive'] = 'none'
                    } else {
                        result[i]['bookmarkactive'] = 'none'
                        result[i]['bookmarkinactive'] = 'flex'
                    }
                    result[i]['promotionVisible'] = 'none'
                    result[i]['EditDeleteVisible'] = 'none'
                    result[i]['promotionDateVisible'] = 'none'
                    result[i]['contactVisible'] = 'flex'
                }

                dl.changes.roomsList = result
                dl.functions.resetFilter('offeredroomFilter')
                dl.functions.modalsPlugin.closeModal('loading')
                return { status: response.status, result: result }
            } else {
                dl.functions.modalsPlugin.closeModal('loading')
                return 'Something went wrong'
            }
        } catch (err) {
            return err
        }
    }
    dl.functions.serachRooms = serachRooms

    //// for search options
    const getSerachRoomsSuggetions = async (key, page) => {
        var myHeaders = new Headers()

        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)

        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
        }

        if (userToken) {
            requestOptions.headers = myHeaders
        }

        try {
            dl.functions.modalsPlugin.openModal('loading')
            // dl.changes.paginationState.active = 1
            // let page = dl.changes.paginationState.active
            var baseUrl = process.env.BASE_URL
            var response = await fetch(
                // `https://melody-mocktail-6tjz.api.neutrodev.com/user/searchRentals?search=${key}&limit=9&page=${page}`,
                `${baseUrl}/user/searchRentals?search=${key}&limit=9&page=${page}`,
                requestOptions
            )
            const res = await response.json()

            if (res.result.length == 0) {
                dl.changes.rentelNodataVisible = {
                    display: 'flex',
                }
                dl.changes.paginationState.total = 0
                dl.changes.paginationState.active = 0
                dl.changes.roomsList = []
                dl.functions.resetFilter('offeredroomFilter')
                dl.functions.modalsPlugin.closeModal('loading')
                return
            } else {
                dl.changes.rentelNodataVisible = {
                    display: 'none',
                }
            }
            dl.changes.paginationState.total = res.totalPage
            // dl.changes.paginationState.active = 1
            var result = res.result
            if (response.status == 200) {
                for (var i = 0; i < res.result.length; i++) {
                    //// code of the option contentn
                }

                dl.changes.roomSearchSuggestionList = result
                dl.functions.resetFilter('offeredroomFilter')
                dl.functions.modalsPlugin.closeModal('loading')
                return { status: response.status, result: result }
            } else {
                dl.functions.modalsPlugin.closeModal('loading')
                return 'Something went wrong'
            }
        } catch (err) {
            return err
        }
    }
    dl.functions.getSerachRoomsSuggetions = getSerachRoomsSuggetions

    /////////////////////////////////////

    const searchNeedAroom = async (key, page) => {
        var myHeaders = new Headers()

        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)

        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
        }

        if (userToken) {
            requestOptions.headers = myHeaders
        }
        try {
            dl.functions.modalsPlugin.openModal('loading')
            // var zipcode = dl.changes.userDetail.zipCode
            //     ? dl.changes.userDetail.zipCode
            //     : '00601'
            // dl.changes.paginationState.active = 1
            // let page = 1
            var baseUrl = process.env.BASE_URL
            var response = await fetch(
                // `https://melody-mocktail-6tjz.api.neutrodev.com/user/searchNeedARentals?search=${key}&page=${page}&limit=9`,
                `${baseUrl}/user/searchNeedARentals?search=${key}&page=${page}&limit=9`,
                requestOptions
            )
            const res = await response.json()
            if (res.result.length == 0) {
                dl.changes.rentelNodataVisible = {
                    display: 'flex',
                }
                dl.changes.paginationState.total = 0
                dl.changes.paginationState.active = 0
                dl.changes.needARoomList = []
                dl.functions.modalsPlugin.closeModal('loading')
                return
            } else {
                dl.changes.rentelNodataVisible = {
                    display: 'none',
                }
            }

            dl.changes.paginationState.total = res.totalPage
            dl.changes.paginationState.active = Number(page)
            var result = res.result
            if (response.status == 200) {
                for (var i = 0; i < res.result.length; i++) {
                    result[i]['location'] =
                        result[i].zipCode.city + ',' + result[i].zipCode.state
                    // result[i]["price"] = "100"
                    result[i]['AdType'] = 'wanted'

                    var postedBy = result[i].name
                        ? result[i].name.split(' ')
                        : ['user']
                    var postedOn = new Date(result[i].cOn)
                    const year = postedOn.getFullYear()
                    const month = (postedOn.getMonth() + 1)
                        .toString()
                        .padStart(2, '0')
                    const day = postedOn.getDate().toString().padStart(2, '0')
                    const formattedDate = `${month}-${day}-${year}`
                    result[i]['postedBy'] = postedBy[0] + ' on ' + formattedDate

                    // result[i]["postedBy"] = result[i].userDetail[0]?result[i].userDetail[0].name:"user"

                    var date = new Date(result[i].availabilityFrom)
                    var options = {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    }
                    result[i]['availabilityFrom'] = date.toLocaleString(
                        undefined,
                        options
                    )

                    if (result[i].rentalType == 'Home') {
                        result[i]['availabilityFrom'] = result[i].neededBy
                    }

                    var date = new Date(result[i].availabilityTo)
                    var options = {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    }
                    result[i]['availabilityTo'] = date.toLocaleString(
                        undefined,
                        options
                    )

                    if (result[i].promotion.status == 'true') {
                        result[i]['mmReferalVisible'] = 'flex'
                    } else {
                        result[i]['mmReferalVisible'] = 'none'
                    }

                    if (result[i].isBookmarked == true) {
                        result[i]['bookmarkactive'] = 'flex'
                        result[i]['bookmarkinactive'] = 'none'
                    } else {
                        result[i]['bookmarkactive'] = 'none'
                        result[i]['bookmarkinactive'] = 'flex'
                    }

                    result[i]['promotionVisible'] = 'none'
                    result[i]['EditDeleteVisible'] = 'none'
                    result[i]['promotionDateVisible'] = 'none'
                    result[i]['contactVisible'] = 'flex'
                }
                // dl.functions.viewsPlugin.showView("home")
                dl.changes.needARoomList = result
                // alert(JSON.stringify(dl.changes.needARoomList))
                dl.functions.modalsPlugin.closeModal('loading')
                return { status: response.status, result: result }
            } else {
                return 'Something went wrong'
            }
        } catch (err) {
            // alert(JSON.stringify(err))
            return err
        }
    }
    dl.functions.searchNeedAroom = searchNeedAroom

    const searchHome = async (key) => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
        }

        try {
            dl.functions.modalsPlugin.openModal('loading')
            var baseUrl = process.env.BASE_URL
            var response = await fetch(
                // `https://melody-mocktail-6tjz.api.neutrodev.com/user/searchHomes?search=${key}&limit=8&page=1`,
                `${baseUrl}/user/searchHomes?search=${key}&limit=8&page=1`,
                requestOptions
            )
            const res = await response.json()

            dl.functions.modalsPlugin.closeModal('loading')
            if (res.result.length == 0) {
                dl.changes.rentelNodataVisible = {
                    display: 'flex',
                }
                dl.changes.paginationState.total = 0
                dl.changes.paginationState.active = 0
                dl.changes.homeRentelsList = []
                dl.functions.resetFilter('offeredHomeFilter')

                return
            } else {
                dl.changes.rentelNodataVisible = {
                    display: 'none',
                }
            }
            dl.changes.paginationState.total = res.totalPage
            dl.changes.paginationState.active = 1
            var result = res.result

            if (response.status == 200) {
                for (var i = 0; i < res.result.length; i++) {
                    result[i]['location'] =
                        result[i].zipCode.city + ',' + result[i].zipCode.state
                    result[i]['AdType'] = 'Offered'
                    result[i]['postedBy'] = result[i].name
                        ? result[i].name
                        : 'user'

                    var date = new Date(result[i].availabilityFrom)
                    var options = {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    }
                    result[i]['availabilityFrom'] = date.toLocaleString(
                        undefined,
                        options
                    )

                    var date = new Date(result[i].availabilityTo)
                    var options = {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    }
                    result[i]['availabilityTo'] = date.toLocaleString(
                        undefined,
                        options
                    )

                    if (result[i].promotion.status == 'true') {
                        result[i]['mmReferalVisible'] = 'flex'
                    } else {
                        result[i]['mmReferalVisible'] = 'none'
                    }

                    if (result[i].files[0]) {
                        result[i]['image'] =
                            'url(' + result[i].files[0].url + ')'
                    } else {
                        result[i]['image'] =
                            'url(https://thumbs.dreamstime.com/b/apartment-building-balconies-photoof-34869405.jpg)'
                    }

                    result[i]['bookmarkactive'] = 'flex'
                    result[i]['bookmarkinactive'] = 'none'
                    result[i]['promotionDateVisible'] = 'none'
                    result[i]['promotionVisible'] = 'none'
                    result[i]['EditDeleteVisible'] = 'none'
                    result[i]['contactVisible'] = 'flex'
                }
                dl.changes.homeRentelsList = result
                dl.functions.resetFilter('offeredHomeFilter')
                return { status: response.status, result: result }
            } else {
                return 'Something went wrong'
            }
        } catch (err) {
            return err
        }
    }
    dl.functions.searchHome = searchHome

    const getBookmarks = async (service, limit, page) => {
        var myHeaders = new Headers()
        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow',
        }

        try {
            dl.functions.modalsPlugin.openModal('loading')
            var baseUrl = process.env.BASE_URL
            var response = await fetch(
                // `https://melody-mocktail-6tjz.api.neutrodev.com/user/bookmarks?serviceType=${service}&limit=${limit}&page=${page}&userId=${dl.changes.userDetail.userId}`,
                `${baseUrl}/user/bookmarks?serviceType=${service}&limit=${limit}&page=${page}&userId=${dl.changes.userDetail.userId}`,
                requestOptions
            )

            const res = await response.json()

            dl.functions.modalsPlugin.closeModal('loading')

            if (response.status == 200) {
                if (res[0].result.length > 0) {
                    dl.changes.bookmarkNodataVisible = { display: 'none' }
                    dl.changes.paginationState.total = Math.ceil(
                        res[0].count.totalCount / limit
                    ) //res[0].count.totalCount/
                    dl.changes.paginationState.active = Number(page)
                    return res[0].result
                } else {
                    dl.changes.bookmarkNodataVisible = { display: 'flex' }
                    dl.changes.paginationState.total = 0
                    dl.changes.paginationState.active = 0
                    return res[0].result
                }
            }
        } catch (err) {
            alert(err)
        }
    }
    dl.functions.getBookmarks = getBookmarks

    const getBookmarkedBlog = async (page) => {
        var res = await dl.functions.getBookmarks('blogs', 6, page)
        var bookmarkList = []
        for (var i = 0; i < res.length; i++) {
            var result = res[i].details
            result['userId'] = res[i].userId
            result['bookmarkId'] = res[i]._id
            var description = dl.functions.common.stripHtml(
                res[i].details.description.html
            )
            result['description'] = description.substring(0, 60) + '....'
            result['bookmarkactive'] = 'flex'
            result['bookmarkinactive'] = 'none'
            result['imageurl'] = res[i].details.image
                ? 'url(' + res[i].details.image.url + ')'
                : 'url(https://images.unsplash.com/photo-1682832919420-b2aca69e6ebc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60)'
            bookmarkList.push(result)
        }
        dl.changes.bookmarkedBlogList = bookmarkList
    }
    dl.functions.getBookmarkedBlog = getBookmarkedBlog

    const getBookmarkedVisaQuestions = async (page) => {
        var res = await dl.functions.getBookmarks('visaqandas', 6, page)
        var bookmarkList = []
        for (var i = 0; i < res.length; i++) {
            var result = res[i].details
            result['userId'] = res[i].userId
            result['bookmarkId'] = res[i]._id
            result['bookmarkactiveVisible'] = 'flex'
            result['bookmarkInactiveVisible'] = 'none'

            result['reportVisible'] = 'flex'
            result['deleteVisible'] = 'none'
            result['editVisible'] = 'none'

            var date = new Date(res[i].cOn)
            var options = { year: 'numeric', month: 'long', day: 'numeric' }
            result['postedOn'] =
                'Posted on ' + date.toLocaleString(undefined, options)

            bookmarkList.push(result)
        }
        dl.changes.bookmarkedQuestionList = bookmarkList
    }
    dl.functions.getBookmarkedVisaQuestions = getBookmarkedVisaQuestions

    const getBookmarkedRides = async (page) => {
        var res = await dl.functions.getBookmarks('rides', 12, page)
        var bookmarkList = []
        for (var i = 0; i < res.length; i++) {
            var result = res[i].details
            result['userId'] = res[i].userId
            result['bookmarkId'] = res[i]._id
            result['title'] =
                res[i].details['from'].city + ' to ' + res[i].details.to.city
            result['from'] = res[i].details['from'].city
            result['to'] = res[i].details.to.city
            result['price'] = '$' + String(res[i].details.price)
            result['spotAvailable'] = res[i].details.spotAvailable
            result['adType'] = res[i].details.adType
            result['offeredBy'] = res[i].details.userDetail[0].name
                ? res[i].details.userDetail[0].name
                : 'No data'
            result['bookmarkactiveVisible'] = 'flex'
            result['bookmarkInactiveVisible'] = 'none'
            result['promotionVisible'] = 'none'
            result['promotionDateVisible'] = 'none'
            result['EditDeleteVisible'] = 'none'
            result['contactVisible'] = 'flex'

            var date = new Date(res[i].details.dateOfJourney)
            var options = { year: 'numeric', month: 'long', day: 'numeric' }
            result['dateOfJourney'] = date.toLocaleString(undefined, options)

            if (result.promotion.status == 'true') {
                result['mmReferalVisible'] = 'flex'
            } else {
                result['mmReferalVisible'] = 'none'
            }

            if (dl.changes.selectedRideBookmarkType == 'Offered') {
                if (res[i].details.adType == 'offered') {
                    if (bookmarkList.length < 6) {
                        bookmarkList.push(result)
                    }
                    dl.changes.offeredRideVisible = 'flex'
                    dl.changes.wantedRideVisible = 'none'
                }
            }

            if (dl.changes.selectedRideBookmarkType == 'Wanted') {
                if (res[i].details.adType == 'wanted') {
                    if (bookmarkList.length < 6) {
                        bookmarkList.push(result)
                    }
                    dl.changes.offeredRideVisible = 'none'
                    dl.changes.wantedRideVisible = 'flex'
                }
            }
        }
        if (bookmarkList.length > 0) {
            dl.changes.bookmarkNodataVisible = { display: 'none' }
        } else {
            dl.changes.bookmarkNodataVisible = { display: 'flex' }
        }
        dl.changes.bookmarkedRideList = bookmarkList
    }
    dl.functions.getBookmarkedRides = getBookmarkedRides

    const getBookmarkedrooms = async (page) => {
        var res = await dl.functions.getBookmarks('rooms', 6, page)
        var bookmarkList = []
        for (var i = 0; i < res.length; i++) {
            var result = res[i].details
            result['userId'] = res.userId
            result['bookmarkId'] = res[i]._id

            result['location'] =
                result.zipCode.city + ',' + result.zipCode.state

            result['AdType'] = 'Offered'
            result['postedBy'] = result.userDetail[0]
                ? result.userDetail[0].name
                : 'user'
            result['rent'] =
                (result.preferedRent ? '$' + result.preferedRent : 'No Data') +
                '/' +
                (result.priceMode ? result.priceMode : 'No Data')
            var date = new Date(result.availabilityFrom)
            var options = { year: 'numeric', month: 'long', day: 'numeric' }
            result['availabilityFrom'] = date.toLocaleString(undefined, options)

            var date = new Date(result.availabilityTo)
            var options = { year: 'numeric', month: 'long', day: 'numeric' }
            result['availabilityTo'] = date.toLocaleString(undefined, options)

            if (result.promotion.status == 'true') {
                result['mmReferalVisible'] = 'flex'
            } else {
                result['mmReferalVisible'] = 'none'
            }

            if (result.files[0]) {
                result['image'] = 'url(' + result.files[0].url + ')'
            } else {
                result['image'] =
                    'url(https://www.home-designing.com/wp-content/uploads/2018/05/stylish-mid-century-style-green-living-room.jpg)'
            }

            result['bookmarkactive'] = 'flex'
            result['bookmarkinactive'] = 'none'
            result['promotionVisible'] = 'none'
            result['promotionDateVisible'] = 'none'
            result['EditDeleteVisible'] = 'none'
            result['contactVisible'] = 'flex'

            bookmarkList.push(result)
        }
        dl.changes.roomsBookmarkVisible = 'flex'
        dl.changes.needARoomBookmarkVisible = 'none'
        dl.changes.homesBookmarkVisible = 'none'
        dl.changes.needAHomeBookmarkVisible = 'none'

        dl.changes.bookmarkedRoomList = bookmarkList
    }
    dl.functions.getBookmarkedrooms = getBookmarkedrooms

    const getBookmarkedNeedArooms = async (page) => {
        var res = await dl.functions.getBookmarks('needarooms', 6, page)
        var bookmarkList = []
        for (var i = 0; i < res.length; i++) {
            var result = res[i].details
            result['userId'] = res[i].userId
            result['bookmarkId'] = res[i]._id

            result['location'] =
                result.zipCode.city + ',' + result.zipCode.state
            result['AdType'] = 'wanted'
            result['postedBy'] = result.userDetail[0]
                ? result.userDetail[0].name
                : 'user'

            var date = new Date(result.availabilityFrom)
            var options = { year: 'numeric', month: 'long', day: 'numeric' }
            result['availabilityFrom'] = date.toLocaleString(undefined, options)

            var date = new Date(result.availabilityTo)
            var options = { year: 'numeric', month: 'long', day: 'numeric' }
            result['availabilityTo'] = date.toLocaleString(undefined, options)

            if (result.promotion.status == 'true') {
                result['mmReferalVisible'] = 'flex'
            } else {
                result['mmReferalVisible'] = 'none'
            }

            result['bookmarkactive'] = 'flex'
            result['bookmarkinactive'] = 'none'
            result['promotionVisible'] = 'none'
            result['promotionDateVisible'] = 'none'
            result['EditDeleteVisible'] = 'none'
            result['contactVisible'] = 'flex'

            bookmarkList.push(result)
        }
        dl.changes.roomsBookmarkVisible = 'none'
        dl.changes.needARoomBookmarkVisible = 'flex'
        dl.changes.homesBookmarkVisible = 'none'
        dl.changes.needAHomeBookmarkVisible = 'none'
        dl.changes.bookmarkedNeedARoomList = bookmarkList
    }
    dl.functions.getBookmarkedNeedArooms = getBookmarkedNeedArooms

    const getBookmarkedHomes = async (page) => {
        var res = await dl.functions.getBookmarks('homes', 6, page)
        var bookmarkList = []

        for (var i = 0; i < res.length; i++) {
            var result = res[i].details
            result['userId'] = res[i].userId
            result['bookmarkId'] = res[i]._id

            result['location'] =
                result.zipCode.city + ',' + result.zipCode.state
            result['AdType'] = 'Offered'
            result['postedBy'] = result.userDetail[0]
                ? result.userDetail[0].name
                : 'user'

            var date = new Date(result.availabilityFrom)
            var options = { year: 'numeric', month: 'long', day: 'numeric' }
            result['availabilityFrom'] = date.toLocaleString(undefined, options)

            var date = new Date(result.availabilityTo)
            var options = { year: 'numeric', month: 'long', day: 'numeric' }
            result['availabilityTo'] = date.toLocaleString(undefined, options)

            if (result.promotion.status == 'true') {
                result['mmReferalVisible'] = 'flex'
            } else {
                result['mmReferalVisible'] = 'none'
            }

            result['price'] =
                (result.preferredRent ? result.preferredRent : 'No data') +
                '/' +
                (result.priceMode ? result.priceMode : 'No data')

            if (result.files[0]) {
                result['image'] = 'url(' + result.files[0].url + ')'
            } else {
                result['image'] =
                    'url(https://thumbs.dreamstime.com/b/apartment-building-balconies-photoof-34869405.jpg)'
            }

            result['availabilityFrom'] = date.toLocaleString(undefined, options)

            result['bookmarkactive'] = 'flex'
            result['bookmarkinactive'] = 'none'
            result['promotionVisible'] = 'none'
            result['promotionDateVisible'] = 'none'
            result['EditDeleteVisible'] = 'none'
            result['contactVisible'] = 'flex'

            bookmarkList.push(result)
        }
        dl.changes.roomsBookmarkVisible = 'none'
        dl.changes.needARoomBookmarkVisible = 'none'
        dl.changes.homesBookmarkVisible = 'flex'
        dl.changes.needAHomeBookmarkVisible = 'none'
        dl.changes.bookmarkedHomeList = bookmarkList
    }
    dl.functions.getBookmarkedHomes = getBookmarkedHomes

    const getBookmarkedNeedAHome = async (page) => {
        var res = await dl.functions.getBookmarks('needahomes', 6, page)
        var bookmarkList = []

        for (var i = 0; i < res.length; i++) {
            var result = res[i].details
            result['userId'] = res[i].userId
            result['bookmarkId'] = res[i]._id

            result['location'] =
                result.zipCode.city + ',' + result.zipCode.state
            result['AdType'] = 'wanted'
            result['postedBy'] = result.userDetail[0]
                ? result.userDetail[0].name
                : 'user'

            if (result.promotion.status == 'true') {
                result['mmReferalVisible'] = 'flex'
            } else {
                result['mmReferalVisible'] = 'none'
            }

            result['bookmarkactive'] = 'flex'
            result['bookmarkinactive'] = 'none'
            result['promotionVisible'] = 'none'
            result['promotionDateVisible'] = 'none'
            result['EditDeleteVisible'] = 'none'
            result['contactVisible'] = 'flex'

            bookmarkList.push(result)
        }
        dl.changes.roomsBookmarkVisible = 'none'
        dl.changes.needARoomBookmarkVisible = 'none'
        dl.changes.homesBookmarkVisible = 'none'
        dl.changes.needAHomeBookmarkVisible = 'flex'
        dl.changes.bookmarkedNeedAHomeList = bookmarkList
    }
    dl.functions.getBookmarkedNeedAHome = getBookmarkedNeedAHome

    const getBookmarkedmovieSuggestions = async (page) => {
        var res = await dl.functions.getBookmarks('moviesuggestions', 6, page)
        var bookmarkList = []

        for (var i = 0; i < res.length; i++) {
            var result = res[i].details
            result['userId'] = res[i].userId
            result['bookmarkId'] = res[i]._id

            result['bookmarkactive'] = 'flex'
            result['bookmarkinactive'] = 'none'
            result['imageurl'] = res[i].details.image
                ? 'url(' + res[i].details.image.url + ')'
                : 'url(https://images.unsplash.com/photo-1682832919420-b2aca69e6ebc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60)'
            for (var j = 0; j < 6; j++) {
                var objname = 'availableOn_' + String(j + 1)
                if (res[i].details.availableOn[j]) {
                    result[objname] = dl.changes.moviesAvailableOn[
                        res[i].details.availableOn[j]
                    ]
                        ? dl.changes.moviesAvailableOn[
                              res[i].details.availableOn[j]
                          ]
                        : ''
                } else {
                    result[objname] = ''
                }
            }

            result['ratingProps'] = {
                readOnly: true,
                color: 'rgba(186,15,23,1)',
                size: 15,
                rating: Number(res[i].details.rating),
                max: 5,
            }

            bookmarkList.push(result)
        }
        dl.changes.bookmarkedMoviesList = bookmarkList
    }
    dl.functions.getBookmarkedmovieSuggestions = getBookmarkedmovieSuggestions

    const getBookmarkedTC = async (page) => {
        var res = await dl.functions.getBookmarks('travelcompanions', 6, page)
        var bookmarkList = []

        for (var i = 0; i < res.length; i++) {
            var result = res[i].details
            result['userId'] = res[i].userId
            result['bookmarkId'] = res[i]._id

            result['city'] = result.to.city_code
            result['from'] = result.from.name
            result['to'] = result.to.name

            result['postedBy'] = result.userDetail[0]
                ? result.userDetail[0].name
                : 'user'
            result['tip'] = '$' + result.tip

            if (result.promotion.status == true) {
                result['mmReferalVisible'] = 'flex'
            } else {
                result['mmReferalVisible'] = 'none'
            }

            result['bookmarkactive'] = 'flex'
            result['bookmarkinactive'] = 'none'
            result['promotionVisible'] = 'none'
            result['EditDeleteVisible'] = 'none'
            result['contactVisible'] = 'flex'
            result['promotionDateVisible'] = 'none'
            if (result.ticketBooked == 'yes') {
                result.dateString =
                    formattedDate(new Date(result.dateOfJourrney)) +
                    ' (' +
                    result.timeOfJourney +
                    ')'
            } else {
                result.dateString =
                    formattedDate(new Date(result.fromDate)) +
                    ' to ' +
                    formattedDate(new Date(result.toDate))
            }
            bookmarkList.push(result)
        }

        dl.changes.bookmarkedTC = bookmarkList

        return bookmarkList
    }
    dl.functions.getBookmarkedTC = getBookmarkedTC

    const getBookmarkedWantToBeATC = async (page) => {
        var res = await dl.functions.getBookmarks(
            'willbeatravelcompanions',
            6,
            page
        )
        var bookmarkList = []

        for (var i = 0; i < res.length; i++) {
            var result = res[i].details
            result['userId'] = res[i].userId
            result['bookmarkId'] = res[i]._id

            result['city'] = result.to.city_code
            result['from'] = result.from.name
            result['to'] = result.to.name

            result['postedBy'] = result.userDetail[0]
                ? result.userDetail[0].name
                : 'user'
            result['tip'] = '$' + result.tip

            if (result.promotion.status == true) {
                result['mmReferalVisible'] = 'flex'
            } else {
                result['mmReferalVisible'] = 'none'
            }

            result['bookmarkactive'] = 'flex'
            result['bookmarkinactive'] = 'none'
            result['promotionVisible'] = 'none'
            result['EditDeleteVisible'] = 'none'
            result['contactVisible'] = 'flex'
            result['promotionDateVisible'] = 'none'
            if (result.ticketBooked == 'yes') {
                result.dateString =
                    formattedDate(new Date(result.dateOfJourrney)) +
                    ' (' +
                    result.timeOfJourney +
                    ')'
            } else {
                result.dateString =
                    formattedDate(new Date(result.fromDate)) +
                    ' to ' +
                    formattedDate(new Date(result.toDate))
            }
            bookmarkList.push(result)
        }

        dl.changes.bookmarkedWantToBeATC = bookmarkList

        return bookmarkList
    }
    dl.functions.getBookmarkedWantToBeATC = getBookmarkedWantToBeATC

    const getRideListing = async (type, limit, page) => {
        var myHeaders = new Headers()
        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow',
        }

        try {
            dl.functions.modalsPlugin.openModal('loading')
            var baseUrl = process.env.BASE_URL
            const response = await fetch(
                // `https://melody-mocktail-6tjz.api.neutrodev.com/user/rideListings?rideType=${type}&limit=${limit}&page=${page}`,
                `${baseUrl}/user/rideListings?rideType=${type}&limit=${limit}&page=${page}`,
                requestOptions
            )

            const res = await response.json()
            if (res.result.length == 0) {
                dl.changes.rideSharingListingNoDataVisible = {
                    display: 'flex',
                }
                if (type == 'wanted') {
                    dl.changes.rideListingVisible = 'none'
                    dl.changes.needARideListingVisible = 'flex'
                }

                if (type == 'offered') {
                    dl.changes.rideListingVisible = 'flex'
                    dl.changes.needARideListingVisible = 'none'
                }
                dl.changes.rideSharingListings = []
                dl.changes.paginationState.total = 0
                dl.functions.modalsPlugin.closeModal('loading')
                return
            } else {
                dl.changes.rideSharingListingNoDataVisible = {
                    display: 'none',
                }
            }
            dl.functions.modalsPlugin.closeModal('loading')
            dl.changes.paginationState.total = res.totalPage
            dl.changes.paginationState.active = Number(page)

            if (response.status == 200) {
                var result = res.result
                for (var i = 0; i < result.length; i++) {
                    result[i]['title'] =
                        result[i]['from'].city + ' to ' + result[i].to.city
                    result[i]['from'] = result[i]['from'].city
                    result[i]['to'] = result[i].to.city
                    result[i]['price'] = '$' + String(result[i].price)
                    result[i]['spotAvailable'] = result[i].spotAvailable
                    result[i]['adType'] = result[i].adType
                    result[i]['offeredBy'] = dl.changes.userDetail.name

                    var dateOfJour = new Date(result[i].dateOfJourney)
                    var options = {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    }
                    result[i]['dateOfJourney'] =
                        'On' +
                        ' ' +
                        dateOfJour.toLocaleString(undefined, options)

                    result[i]['bookmarkactiveVisible'] = 'none'
                    result[i]['bookmarkInactiveVisible'] = 'none'
                    if (result[i].promotion) {
                        if (result[i].promotion.status == true) {
                            result[i]['mmReferalVisible'] = 'flex'
                            result[i]['promotionVisible'] = 'none'

                            var date = new Date(
                                result[i].promotion.promotionFrom
                            )
                            var options = {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            }
                            result[i]['promotionstartDate'] =
                                'Being promoted from' +
                                ' ' +
                                date.toLocaleString(undefined, options)

                            var currentDate = new Date()
                            var targetDate = new Date(
                                result[i].promotion.promotionTo
                            )
                            currentDate.setHours(0, 0, 0, 0)
                            targetDate.setHours(0, 0, 0, 0)
                            var timeDiff =
                                targetDate.getTime() - currentDate.getTime()
                            result[i]['promotionDayleft'] =
                                Math.ceil(timeDiff / (1000 * 60 * 60 * 24)) +
                                'days left'

                            result[i]['promotionDateVisible'] = 'flex'
                        } else {
                            result[i]['mmReferalVisible'] = 'none'
                            result[i]['promotionVisible'] = 'flex'
                            result[i]['promotionDateVisible'] = 'none'
                        }
                    } else {
                        result[i]['mmReferalVisible'] = 'none'
                    }

                    result[i]['EditDeleteVisible'] = 'flex'
                    result[i]['contactVisible'] = 'none'
                }
                if (type == 'wanted') {
                    dl.changes.rideListingVisible = 'none'
                    dl.changes.needARideListingVisible = 'flex'
                }

                if (type == 'offered') {
                    dl.changes.rideListingVisible = 'flex'
                    dl.changes.needARideListingVisible = 'none'
                }

                dl.changes.rideSharingListings = result
            } else {
                return 'Something went wrong'
            }
        } catch (err) {
            return err
        }
    }
    dl.functions.getRideListing = getRideListing

    const getRoomListing = async (limit, page) => {
        var myHeaders = new Headers()
        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow',
        }

        try {
            dl.functions.modalsPlugin.openModal('loading')
            var baseUrl = process.env.BASE_URL
            var response = await fetch(
                // `https://melody-mocktail-6tjz.api.neutrodev.com/user/rentalListings?limit=${limit}&page=${page}`,
                `${baseUrl}/user/rentalListings?limit=${limit}&page=${page}`,
                requestOptions
            )
            const res = await response.json()
            if (res.result.length == 0) {
                dl.changes.rentelistingNoDataVisible = {
                    display: 'flex',
                }
                dl.changes.roomsListing = []
                dl.changes.roomlistingVisible = 'flex'
                dl.changes.needARoomListingVisible = 'none'
                dl.changes.homeListingVisible = 'none'
                dl.changes.needAHomeListingVisible = 'none'
                dl.changes.paginationState.total = 0
                dl.functions.modalsPlugin.closeModal('loading')

                return
            } else {
                dl.changes.rentelistingNoDataVisible = {
                    display: 'none',
                }
            }

            dl.changes.paginationState.total = res.totalPage
            dl.changes.paginationState.active = Number(page)
            var result = res.result
            if (response.status == 200) {
                for (var i = 0; i < res.result.length; i++) {
                    result[i]['location'] =
                        result[i].zipCode.city + ',' + result[i].zipCode.state
                    result[i]['AdType'] = 'Offered'
                    result[i]['postedBy'] = dl.changes.userDetail.name

                    // result[i]["rent"] = result[i].preferedRent
                    //   ? "$" + result[i].preferedRent
                    //   : "null";
                    let priceMode = result[i].priceMode
                    if (priceMode) {
                        priceMode = priceMode.split(' ')[1]
                    }
                    if (result[i].rentalType == 'Home') {
                        result[i]['rent'] =
                            '$' + result[i].preferredRent
                                ? result[i].preferredRent
                                : result[i].preferedRent + '/' + priceMode
                    } else {
                        result[i]['rent'] =
                            '$' + result[i].preferedRent + '/' + priceMode
                    }

                    var date = new Date(result[i].availabilityFrom)
                    var options = {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    }
                    result[i]['availabilityFrom'] = date.toLocaleString(
                        undefined,
                        options
                    )

                    var date = new Date(result[i].availabilityTo)
                    var options = {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    }
                    result[i]['availabilityTo'] = date.toLocaleString(
                        undefined,
                        options
                    )

                    if (result[i].promotion.status == 'true') {
                        result[i]['mmReferalVisible'] = 'flex'
                        result[i]['promotionVisible'] = 'none'

                        var date = new Date(result[i].promotion.promotionFrom)
                        var options = {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        }
                        result[i]['promotionstartDate'] =
                            'Being promoted from' +
                            ' ' +
                            date.toLocaleString(undefined, options)

                        var currentDate = new Date()
                        var targetDate = new Date(
                            result[i].promotion.promotionTo
                        )
                        currentDate.setHours(0, 0, 0, 0)
                        targetDate.setHours(0, 0, 0, 0)
                        var timeDiff =
                            targetDate.getTime() - currentDate.getTime()
                        result[i]['promotionDayleft'] =
                            Math.ceil(timeDiff / (1000 * 60 * 60 * 24)) +
                            'days left'
                        result[i]['promotionDateVisible'] = 'flex'
                    } else {
                        result[i]['mmReferalVisible'] = 'none'
                        result[i]['promotionVisible'] = 'none'
                        result[i]['promotionDateVisible'] = 'none'
                    }

                    if (result[i].files[0]) {
                        result[i]['image'] =
                            'url(' + result[i].files[0].url + ')'
                    } else {
                        result[i]['image'] =
                            'url(https://www.home-designing.com/wp-content/uploads/2018/05/stylish-mid-century-style-green-living-room.jpg)'
                    }

                    result[i]['bookmarkactive'] = 'none'
                    result[i]['bookmarkinactive'] = 'none'

                    result[i]['EditDeleteVisible'] = 'flex'
                    result[i]['contactVisible'] = 'none'
                }
                dl.changes.roomlistingVisible = 'flex'
                dl.changes.needARoomListingVisible = 'none'
                dl.changes.homeListingVisible = 'none'
                dl.changes.needAHomeListingVisible = 'none'

                dl.changes.roomsListing = result
                dl.functions.modalsPlugin.closeModal('loading')
                return { status: response.status, result: result }
            } else {
                dl.functions.modalsPlugin.closeModal('loading')
                return 'Something went wrong'
            }
        } catch (err) {
            return err
        }
    }
    dl.functions.getRoomListing = getRoomListing

    const getneedARoomListing = async (limit, page) => {
        var myHeaders = new Headers()
        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow',
        }

        try {
            dl.functions.modalsPlugin.openModal('loading')
            var baseUrl = process.env.BASE_URL
            var response = await fetch(
                // `https://melody-mocktail-6tjz.api.neutrodev.com/user/needarentalListing?limit=${limit}&page=${page}`,
                `${baseUrl}/user/needarentalListing?limit=${limit}&page=${page}`,
                requestOptions
            )
            const res = await response.json()
            if (res.result.length == 0) {
                dl.changes.rentelistingNoDataVisible = {
                    display: 'flex',
                }
                dl.changes.needARoomListing = []
                dl.changes.roomlistingVisible = 'none'
                dl.changes.needARoomListingVisible = 'flex'
                dl.changes.homeListingVisible = 'none'
                dl.changes.needAHomeListingVisible = 'none'
                dl.changes.paginationState.total = 0
                dl.functions.modalsPlugin.closeModal('loading')
                return
            } else {
                dl.changes.rentelistingNoDataVisible = {
                    display: 'none',
                }
            }
            dl.functions.modalsPlugin.closeModal('loading')

            dl.changes.paginationState.total = res.totalPage
            dl.changes.paginationState.active = Number(page)
            var result = res.result
            if (response.status == 200) {
                for (var i = 0; i < res.result.length; i++) {
                    result[i]['location'] =
                        result[i].zipCode.city + ',' + result[i].zipCode.state
                    result[i]['AdType'] = 'wanted'
                    result[i]['postedBy'] = dl.changes.userDetail.name

                    var date = new Date(result[i].availabilityFrom)
                    var options = {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    }
                    result[i]['availabilityFrom'] = date.toLocaleString(
                        undefined,
                        options
                    )

                    if (result[i].rentalType == 'Home') {
                        result[i]['availabilityFrom'] = result[i].neededBy
                    }

                    var date = new Date(result[i].availabilityTo)
                    var options = {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    }
                    result[i]['availabilityTo'] = date.toLocaleString(
                        undefined,
                        options
                    )

                    if (result[i].promotion.status == 'true') {
                        result[i]['mmReferalVisible'] = 'flex'
                        result[i]['promotionVisible'] = 'none'

                        var date = new Date(result[i].promotion.promotionFrom)
                        var options = {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        }
                        result[i]['promotionstartDate'] =
                            'Being promoted from' +
                            ' ' +
                            date.toLocaleString(undefined, options)

                        var currentDate = new Date()
                        var targetDate = new Date(
                            result[i].promotion.promotionTo
                        )
                        currentDate.setHours(0, 0, 0, 0)
                        targetDate.setHours(0, 0, 0, 0)
                        var timeDiff =
                            targetDate.getTime() - currentDate.getTime()
                        result[i]['promotionDayleft'] =
                            Math.ceil(timeDiff / (1000 * 60 * 60 * 24)) +
                            'days left'
                        result[i]['promotionDateVisible'] = 'flex'
                    } else {
                        result[i]['mmReferalVisible'] = 'none'
                        result[i]['promotionVisible'] = 'none'
                        result[i]['promotionDateVisible'] = 'none'
                    }

                    result[i]['bookmarkactive'] = 'none'
                    result[i]['bookmarkinactive'] = 'none'

                    result[i]['EditDeleteVisible'] = 'flex'
                    result[i]['contactVisible'] = 'none'
                }
                dl.changes.roomlistingVisible = 'none'
                dl.changes.needARoomListingVisible = 'flex'
                dl.changes.homeListingVisible = 'none'
                dl.changes.needAHomeListingVisible = 'none'
                dl.changes.needARoomListing = result
                return { status: response.status, result: result }
            } else {
                return 'Something went wrong'
            }
        } catch (err) {
            return err
        }
    }
    dl.functions.getneedARoomListing = getneedARoomListing

    const getHomeListing = async (limit, page) => {
        var myHeaders = new Headers()
        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow',
        }

        try {
            dl.functions.modalsPlugin.openModal('loading')
            var baseUrl = process.env.BASE_URL
            var response = await fetch(
                // `https://melody-mocktail-6tjz.api.neutrodev.com/user/homeListing?limit=${limit}&page=${page}`,
                `${baseUrl}/user/homeListing?limit=${limit}&page=${page}`,
                requestOptions
            )
            const res = await response.json()
            if (res.result.length == 0) {
                dl.changes.rentelistingNoDataVisible = {
                    display: 'flex',
                }
                dl.changes.homeRentelsListing = []
                dl.changes.roomlistingVisible = 'none'
                dl.changes.needARoomListingVisible = 'none'
                dl.changes.homeListingVisible = 'flex'
                dl.changes.needAHomeListingVisible = 'none'
                dl.changes.paginationState.total = 0
                dl.functions.modalsPlugin.closeModal('loading')
                return
            } else {
                dl.changes.rentelistingNoDataVisible = {
                    display: 'none',
                }
            }
            dl.functions.modalsPlugin.closeModal('loading')
            dl.changes.paginationState.total = res.totalPage
            dl.changes.paginationState.active = Number(page)
            var result = res.result

            if (response.status == 200) {
                for (var i = 0; i < res.result.length; i++) {
                    result[i]['location'] =
                        result[i].zipCode.city + ',' + result[i].zipCode.state
                    result[i]['price'] = '$' + result[i].preferredRent
                    result[i]['AdType'] = 'Offered'
                    result[i]['postedBy'] = dl.changes.userDetail.name

                    var date = new Date(result[i].availabilityFrom)
                    var options = {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    }
                    result[i]['availabilityFrom'] = date.toLocaleString(
                        undefined,
                        options
                    )

                    var date = new Date(result[i].availabilityTo)
                    var options = {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    }
                    result[i]['availabilityTo'] = date.toLocaleString(
                        undefined,
                        options
                    )

                    if (result[i].promotion.status == 'true') {
                        result[i]['mmReferalVisible'] = 'flex'
                        result[i]['promotionVisible'] = 'none'

                        var date = new Date(result[i].promotion.promotionFrom)
                        var options = {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        }
                        result[i]['promotionstartDate'] =
                            'Being promoted from' +
                            ' ' +
                            date.toLocaleString(undefined, options)

                        var currentDate = new Date()
                        var targetDate = new Date(
                            result[i].promotion.promotionTo
                        )
                        currentDate.setHours(0, 0, 0, 0)
                        targetDate.setHours(0, 0, 0, 0)
                        var timeDiff =
                            targetDate.getTime() - currentDate.getTime()
                        result[i]['promotionDayleft'] =
                            Math.ceil(timeDiff / (1000 * 60 * 60 * 24)) +
                            'days left'
                        result[i]['promotionDateVisible'] = 'flex'
                    } else {
                        result[i]['mmReferalVisible'] = 'none'
                        result[i]['promotionVisible'] = 'flex'
                        result[i]['promotionDateVisible'] = 'none'
                    }

                    if (result[i].files[0]) {
                        result[i]['image'] =
                            'url(' + result[i].files[0].url + ')'
                    } else {
                        result[i]['image'] =
                            'url(https://thumbs.dreamstime.com/b/apartment-building-balconies-photoof-34869405.jpg)'
                    }

                    result[i]['bookmarkactive'] = 'none'
                    result[i]['bookmarkinactive'] = 'none'

                    result[i]['EditDeleteVisible'] = 'flex'
                    result[i]['contactVisible'] = 'none'
                }
                dl.changes.roomlistingVisible = 'none'
                dl.changes.needARoomListingVisible = 'none'
                dl.changes.homeListingVisible = 'flex'
                dl.changes.needAHomeListingVisible = 'none'

                dl.changes.homeRentelsListing = result
                return { status: response.status, result: result }
            } else {
                return 'Something went wrong'
            }
        } catch (err) {
            return err
        }
    }
    dl.functions.getHomeListing = getHomeListing

    const getneedAHomeListing = async (limit, page) => {
        var myHeaders = new Headers()
        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow',
        }

        try {
            dl.functions.modalsPlugin.openModal('loading')
            var baseUrl = process.env.BASE_URL
            var response = await fetch(
                // `https://melody-mocktail-6tjz.api.neutrodev.com/user/needAHomeListing?limit=${limit}&page=${page}`,
                `${baseUrl}/user/needAHomeListing?limit=${limit}&page=${page}`,
                requestOptions
            )
            const res = await response.json()

            if (res.result.length == 0) {
                dl.changes.rentelistingNoDataVisible = {
                    display: 'flex',
                }
                dl.changes.needAHomeListing = []
                dl.changes.roomlistingVisible = 'none'
                dl.changes.needARoomListingVisible = 'none'
                dl.changes.homeListingVisible = 'none'
                dl.changes.needAHomeListingVisible = 'flex'
                dl.changes.paginationState.total = 0
                dl.functions.modalsPlugin.closeModal('loading')
                return
            } else {
                dl.changes.rentelistingNoDataVisible = {
                    display: 'none',
                }
            }
            dl.functions.modalsPlugin.closeModal('loading')
            dl.changes.paginationState.total = res.totalPage
            dl.changes.paginationState.active = Number(page)
            var result = res.result

            if (response.status == 200) {
                for (var i = 0; i < res.result.length; i++) {
                    result[i]['location'] =
                        result[i].zipCode.city + ',' + result[i].zipCode.state
                    result[i]['AdType'] = 'wanted'
                    result[i]['postedBy'] = dl.changes.userDetail.name

                    if (result[i].promotion.status == 'true') {
                        result[i]['mmReferalVisible'] = 'flex'
                        result[i]['promotionVisible'] = 'none'

                        var date = new Date(result[i].promotion.promotionFrom)
                        var options = {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        }
                        result[i]['promotionstartDate'] =
                            'Being promoted from' +
                            ' ' +
                            date.toLocaleString(undefined, options)

                        var currentDate = new Date()
                        var targetDate = new Date(
                            result[i].promotion.promotionTo
                        )
                        currentDate.setHours(0, 0, 0, 0)
                        targetDate.setHours(0, 0, 0, 0)
                        var timeDiff =
                            targetDate.getTime() - currentDate.getTime()
                        result[i]['promotionDayleft'] =
                            Math.ceil(timeDiff / (1000 * 60 * 60 * 24)) +
                            'days left'
                        result[i]['promotionDateVisible'] = 'flex'
                    } else {
                        result[i]['mmReferalVisible'] = 'none'
                        result[i]['promotionVisible'] = 'flex'
                        result[i]['promotionDateVisible'] = 'none'
                    }

                    result[i]['bookmarkactive'] = 'none'
                    result[i]['bookmarkinactive'] = 'none'

                    result[i]['EditDeleteVisible'] = 'flex'
                    result[i]['contactVisible'] = 'none'
                }
                dl.changes.roomlistingVisible = 'none'
                dl.changes.needARoomListingVisible = 'none'
                dl.changes.homeListingVisible = 'none'
                dl.changes.needAHomeListingVisible = 'flex'

                dl.changes.needAHomeListing = result
                return { status: response.status, result: result }
            } else {
                return 'Something went wrong'
            }
        } catch (err) {
            return err
        }
    }
    dl.functions.getneedAHomeListing = getneedAHomeListing

    const getvisaquestionListing = async (limit, page, category) => {
        var myHeaders = new Headers()
        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow',
        }

        try {
            dl.functions.modalsPlugin.openModal('loading')
            var baseUrl = process.env.BASE_URL
            const response = await fetch(
                // `https://melody-mocktail-6tjz.api.neutrodev.com/user/visaqandasListing?limit=${limit}&page=${page}&category=${category}`,
                `${baseUrl}/user/visaqandasListing?limit=${limit}&page=${page}&category=${category}`,
                requestOptions
            )
            const res = await response.json()
            if (res.result.length == 0) {
                dl.changes.visaQuestionListingNoDataVisible = {
                    display: 'flex',
                }
                dl.changes.paginationState.total = 0
                dl.changes.visaquestionsListing = []
                dl.functions.modalsPlugin.closeModal('loading')
                return
            } else {
                dl.changes.visaQuestionListingNoDataVisible = {
                    display: 'none',
                }
            }
            dl.functions.modalsPlugin.closeModal('loading')
            dl.changes.paginationState.total = res.totalPage
            dl.changes.paginationState.active = Number(page)
            if (response.status == 200) {
                var result = res.result
                for (var i = 0; i < result.length; i++) {
                    result[i]['bookmarkactiveVisible'] = 'none'
                    result[i]['bookmarkInactiveVisible'] = 'none'
                    result[i]['editVisible'] = 'flex'
                    result[i]['deleteVisible'] = 'flex'
                    result[i]['reportVisible'] = 'none'
                    var date = new Date(result[i].cOn)
                    var options = {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    }
                    result[i]['postedOn'] =
                        'Posted on ' + date.toLocaleString(undefined, options)
                }
                dl.changes.visaquestionsListing = result
            } else {
                return 'Something went wrong'
            }
        } catch (err) {
            return err
        }
    }
    dl.functions.getvisaquestionListing = getvisaquestionListing

    const validateStudyAbroadForm = () => {
        let isValid = true
        let obj = dl.changes.studyAbroadForm

        var requiredFields = dl.changes.requiredStudyAbrodFields

        for (let key in obj) {
            if (requiredFields.includes(key)) {
                if (obj[key].value == '') {
                    dl.changes.studyAbroadForm[key]['inputBorderColor'] =
                        'rgba(248,246,246,1)'
                    dl.changes.studyAbroadForm[key]['showErrorMessage'] = 'flex'
                    isValid = false
                }
            }
        }

        return isValid
    }
    dl.functions.validateStudyAbroadForm = validateStudyAbroadForm

    const getTimeSlot = async () => {
        var myHeaders = new Headers()
        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow',
        }

        var date = dl.changes.studyAbroadPaymentForm.date.value
        var session = dl.changes.studyAbroadPaymentForm.session.value
        var baseUrl = process.env.BASE_URL
        try {
            const response = await fetch(
                // `https://melody-mocktail-6tjz.api.neutrodev.com/user/slots?date=${date}&category=Study abroad&type=${session}`,
                `${baseUrl}/user/slots?date=${date}&category=Study abroad&type=${session}`,
                requestOptions
            )
            const res = await response.json()

            dl.changes.availableSlots = res.slots
            if (res.slots.length < 1) {
                dl.changes.noSlotAvailableVisible = 'flex'
            } else {
                dl.changes.noSlotAvailableVisible = 'none'
            }
            return response.status
        } catch (err) {
            return err
        }
    }
    dl.functions.getTimeSlot = getTimeSlot

    const getvisaQuestionTimeSlot = async () => {
        var myHeaders = new Headers()
        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow',
        }

        var date = dl.changes.visaQuestionSlotBookingForm.date.value
        var session = dl.changes.visaQuestionSlotBookingForm.session.value
        var baseUrl = process.env.BASE_URL
        try {
            const response = await fetch(
                // `https://melody-mocktail-6tjz.api.neutrodev.com/user/slots?date=${date}&category=Visa %26 Immigration&type=${session}`,
                `${baseUrl}/user/slots?date=${date}&category=Visa %26 Immigration&type=${session}`,
                requestOptions
            )

            const res = await response.json()

            dl.changes.availableSlots = res.slots
            if (res.slots.length < 1) {
                dl.changes.noSlotAvailableVisible = 'flex'
            } else {
                dl.changes.noSlotAvailableVisible = 'none'
            }
            return response.status
        } catch (err) {
            return err
        }
    }
    dl.functions.getvisaQuestionTimeSlot = getvisaQuestionTimeSlot

    const createBookings = async (body) => {
        var myHeaders = new Headers()
        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)
        myHeaders.append('Content-Type', 'application/json')

        var raw = JSON.stringify(body)

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
        }

        try {
            dl.functions.modalsPlugin.openModal('loading')
            var baseUrl = process.env.BASE_URL
            var response = await fetch(
                // 'https://melody-mocktail-6tjz.api.neutrodev.com/user/bookings/create',
                `${baseUrl}/user/bookings/create`,
                requestOptions
            )
            const res = await response.json()
            dl.functions.modalsPlugin.closeModal('loading')

            if (response.status == 200) {
                return res
            }
        } catch (err) {
            return err
        }
    }
    dl.functions.createBookings = createBookings

    const bookingPaymentSucess = async (body) => {
        var myHeaders = new Headers()
        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)
        myHeaders.append('Content-Type', 'application/json')

        var raw = JSON.stringify(body)

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
        }
        var baseUrl = process.env.BASE_URL
        try {
            var response = await fetch(
                // 'https://melody-mocktail-6tjz.api.neutrodev.com/user/bookings/paymentupdate',
                `${baseUrl}/user/bookings/paymentupdate`,
                requestOptions
            )
            const res = await response.json()

            if (response.status == 200) {
                return response.status
            } else {
                return 'Something went wrong'
            }
        } catch (err) {
            return err
        }
    }
    dl.functions.bookingPaymentSucess = bookingPaymentSucess

    const updateRooms = async (body) => {
        var myHeaders = new Headers()
        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)
        myHeaders.append('Content-Type', 'application/json')

        var raw = JSON.stringify(body)

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
        }
        var baseUrl = process.env.BASE_URL
        try {
            var response = await fetch(
                // 'https://melody-mocktail-6tjz.api.neutrodev.com/user/rental/update',
                `${baseUrl}/user/rental/update`,
                requestOptions
            )
            const res = await response.json()

            if (response.status == 200) {
                return response.status
            } else {
                return 'Something went wrong'
            }
        } catch (err) {
            return err
        }
    }
    dl.functions.updateRooms = updateRooms

    const updateNeedARoom = async (body) => {
        var myHeaders = new Headers()
        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)
        myHeaders.append('Content-Type', 'application/json')

        var raw = JSON.stringify(body)

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
        }
        var baseUrl = process.env.BASE_URL
        try {
            var response = await fetch(
                // 'https://melody-mocktail-6tjz.api.neutrodev.com/user/needARental/update',
                `${baseUrl}/user/needARental/update`,
                requestOptions
            )
            const res = await response.json()

            if (response.status == 200) {
                return response.status
            } else {
                return 'Something went wrong'
            }
        } catch (err) {
            return err
        }
    }
    dl.functions.updateNeedARoom = updateNeedARoom

    const updateHomeRental = async (body) => {
        var myHeaders = new Headers()
        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)
        myHeaders.append('Content-Type', 'application/json')

        var raw = JSON.stringify(body)

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
        }
        var baseUrl = process.env.BASE_URL
        try {
            var response = await fetch(
                // 'https://melody-mocktail-6tjz.api.neutrodev.com/user/home/update',
                `${baseUrl}/user/home/update`,
                requestOptions
            )
            const res = await response.json()

            if (response.status == 200) {
                return response.status
            } else {
                return 'Something went wrong'
            }
        } catch (err) {
            return err
        }
    }
    dl.functions.updateHomeRental = updateHomeRental

    const updateNeedAHome = async (body) => {
        var myHeaders = new Headers()
        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)
        myHeaders.append('Content-Type', 'application/json')

        var raw = JSON.stringify(body)

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
        }
        var baseUrl = process.env.BASE_URL
        try {
            var response = await fetch(
                // 'https://melody-mocktail-6tjz.api.neutrodev.com/user/needAHome/update',
                `${baseUrl}/user/needAHome/update`,
                requestOptions
            )
            const res = await response.json()

            if (response.status == 200) {
                return response.status
            } else {
                return 'Something went wrong'
            }
        } catch (err) {
            return err
        }
    }
    dl.functions.updateNeedAHome = updateNeedAHome

    const updateRide = async (body) => {
        var myHeaders = new Headers()
        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)
        myHeaders.append('Content-Type', 'application/json')

        var raw = JSON.stringify(body)

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
        }
        var baseUrl = process.env.BASE_URL
        try {
            var response = await fetch(
                // 'https://melody-mocktail-6tjz.api.neutrodev.com/user/rideSharing/update',
                `${baseUrl}/user/rideSharing/update`,
                requestOptions
            )
            const res = await response.json()

            if (response.status == 200) {
                return response.status
            } else {
                return 'Something went wrong'
            }
        } catch (err) {
            return err
        }
    }
    dl.functions.updateRide = updateRide

    const updateVisaQandA = async (body) => {
        var myHeaders = new Headers()
        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)
        myHeaders.append('Content-Type', 'application/json')

        var raw = JSON.stringify(body)

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
        }
        var baseUrl = process.env.BASE_URL
        try {
            var response = await fetch(
                // 'https://melody-mocktail-6tjz.api.neutrodev.com/user/visaqandas/update',
                `${baseUrl}/user/visaqandas/update`,
                requestOptions
            )
            const res = await response.json()

            if (response.status == 200) {
                return response.status
            } else {
                return 'Something went wrong'
            }
        } catch (err) {
            return err
        }
    }
    dl.functions.updateVisaQandA = updateVisaQandA

    const createBookmark = async (body) => {
        var myHeaders = new Headers()
        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)
        myHeaders.append('Content-Type', 'application/json')

        var raw = JSON.stringify(body)

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
        }

        try {
            dl.functions.modalsPlugin.openModal('loading')
            var baseUrl = process.env.BASE_URL
            var response = await fetch(
                // 'https://melody-mocktail-6tjz.api.neutrodev.com/user/bookmarks/create',
                `${baseUrl}/user/bookmarks/create`,
                requestOptions
            )

            dl.functions.modalsPlugin.closeModal('loading')
            if (response.status == 200) {
                const res = await response.json()
                if (res.message) {
                    window.toast(res.message)
                } else {
                    window.toast('Bookmarked')
                }
                return res
            }
        } catch (err) {
            dl.functions.modalsPlugin.closeModal('loading')
            // var userToken = dl.functions.common.getCookie('userToken')

            return err
        }
    }
    dl.functions.createBookmark = createBookmark

    const bookmarkAction = async (list, index, serivceType) => {
        var userToken = dl.functions.common.getCookie('userToken')
        if (userToken) {
            var id = dl.changes[list][index]._id
            var body = {
                serviceType: serivceType,
                bookmarkedObjectId: id,
            }
            var res = await dl.functions.createBookmark(body)
            let activeKey = 'bookmarkactive'
            let inactiveKey = 'bookmarkinactive'
            if (serivceType == 'visaqandas') {
                activeKey = 'bookmarkactiveVisible'
                inactiveKey = 'bookmarkInactiveVisible'
            }
            if (res.message) {
                dl.changes[list][index][activeKey] = 'none'
                dl.changes[list][index][inactiveKey] = 'flex'
            } else {
                dl.changes[list][index][activeKey] = 'flex'
                dl.changes[list][index][inactiveKey] = 'none'
            }
        } else {
            // dl.functions.modalsPlugin.openModal('loginLg')
        }
    }
    dl.functions.bookmarkAction = bookmarkAction

    const getBooking = async (category, limit, page) => {
        var myHeaders = new Headers()
        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow',
        }

        try {
            dl.functions.modalsPlugin.openModal('loading')
            var baseUrl = process.env.BASE_URL
            var response = await fetch(
                // `https://melody-mocktail-6tjz.api.neutrodev.com/user/bookings?category=${category}&limit=${limit}&page=${page}`,
                `${baseUrl}/user/bookings?category=${category}&limit=${limit}&page=${page}`,
                requestOptions
            )
            const res = await response.json()
            var res2 = []
            if (res[0].result.length < 1) {
                dl.changes.bookingNoDataVisible = {
                    display: 'flex',
                }
                dl.changes.bookingList = []
                dl.changes.paginationState.total = 0 //Math.ceil(res[0].count.totalCount/limit)
                dl.changes.paginationState.active = 0
                dl.functions.modalsPlugin.closeModal('loading')
                return
            } else {
                dl.changes.bookingNoDataVisible = {
                    display: 'none',
                }
                res2 = res[0]
            }
            dl.changes.paginationState.total = Math.ceil(
                res[0].count.totalCount / limit
            ) //Math.ceil(res[0].count.totalCount/limit)
            dl.changes.paginationState.active = Number(page)
            dl.functions.modalsPlugin.closeModal('loading')
            if (response.status == 200) {
                var result = []
                for (var i = 0; i < res2.result.length; i++) {
                    var obj = {}
                    var date = new Date(res2.result[i].date)
                    var options = {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    }
                    obj['date'] = date.toLocaleString(undefined, options)
                    var today = new Date()
                    if (today > date) {
                        obj['upcomingVisible'] = 'none'
                        obj['completeVisible'] = 'flex'
                    } else {
                        obj['upcomingVisible'] = 'flex'
                        obj['completeVisible'] = 'none'
                    }
                    obj['price'] =
                        '₹' + String(res2.result[i].orderData.total / 100)
                    if (category == 'Study abroad') {
                        obj['appliedfor'] = res2.result[i].otherDetails.formType
                    }
                    if (category == 'Visa %26 Immigration') {
                        obj['appliedfor'] = res2.result[i].otherDetails.visatype
                    }
                    obj['sessiontype'] = res2.result[i].type
                    obj['expertName'] = res2.result[i].expertDetail.name
                    var bookedDate = res2.result[i].orderData.createdAt
                    var date = new Date(bookedDate)
                    var options = {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    }
                    obj['bookedOn'] = date.toLocaleString(undefined, options)
                    if (res2.result[i].slot > 12) {
                        obj['timeslot'] =
                            String(res2.result[i].slot - 12) +
                            'pm' +
                            '-' +
                            String(res2.result[i].slot - 11) +
                            'pm'
                    } else {
                        obj['timeslot'] =
                            String(res2.result[i].slot) +
                            'am' +
                            '-' +
                            String(res2.result[i].slot + 1) +
                            'am'
                    }
                    obj['joinLink'] = res2.result[i].joinLink

                    result.push(obj)
                }
                dl.changes.bookingList = result

                return response.status
            }
        } catch (err) {
            return err
        }
    }
    dl.functions.getBooking = getBooking

    const createPromteOrder = async (body) => {
        var myHeaders = new Headers()
        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)
        myHeaders.append('Content-Type', 'application/json')

        var raw = JSON.stringify(body)

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
        }

        try {
            dl.functions.modalsPlugin.openModal('loading')
            var baseUrl = process.env.BASE_URL
            var response = await fetch(
                // 'https://melody-mocktail-6tjz.api.neutrodev.com/user/service/promote',
                `${baseUrl}/user/service/promote`,
                requestOptions
            )
            const res = await response.json()
            dl.functions.modalsPlugin.closeModal('loading')
            if (response.status == 200) {
                return res
            }
        } catch (err) {
            return err
        }
    }
    dl.functions.createPromteOrder = createPromteOrder

    const promoteOrderConfirm = async (body) => {
        var myHeaders = new Headers()
        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)
        myHeaders.append('Content-Type', 'application/json')

        var raw = JSON.stringify(body)

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
        }

        try {
            dl.functions.modalsPlugin.openModal('loading')
            var baseUrl = process.env.BASE_URL
            var response = await fetch(
                // 'https://melody-mocktail-6tjz.api.neutrodev.com/user/service/promote/paymentconfirmation',
                `${baseUrl}/user/service/promote/paymentconfirmation`,
                requestOptions
            )
            const res = await response.json()
            dl.functions.modalsPlugin.closeModal('loading')
            if (response.status == 200) {
                return response.status
            }
        } catch (err) {
            return err
        }
    }
    dl.functions.promoteOrderConfirm = promoteOrderConfirm

    const deleteBookmark = async (body) => {
        var myHeaders = new Headers()
        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)
        myHeaders.append('Content-Type', 'application/json')

        var raw = JSON.stringify(body)

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
        }

        try {
            dl.functions.modalsPlugin.openModal('loading')
            var baseUrl = process.env.BASE_URL
            var response = await fetch(
                // 'https://melody-mocktail-6tjz.api.neutrodev.com/user/bookmarks/remove',
                `${baseUrl}/user/bookmarks/remove`,
                requestOptions
            )
            const res = await response.json()
            dl.functions.modalsPlugin.closeModal('loading')
            if (response.status == 200) {
                var currentPath = dl.functions.common.getLastPath()
                window.toast('Bookmark Removed')
                if (currentPath == 'rentalbookmarks') {
                    if (
                        dl.changes.selectedBookmarkRentalType == 'Home rentals'
                    ) {
                        if (dl.changes.selectedBookmarkType == 'Wanted') {
                            dl.functions.getBookmarkedNeedAHome(1)
                        } else {
                            dl.functions.getBookmarkedHomes(1)
                        }
                    }

                    if (
                        dl.changes.selectedBookmarkRentalType ==
                        'Rooms/Roommates'
                    ) {
                        if (dl.changes.selectedBookmarkType == 'Wanted') {
                            dl.functions.getBookmarkedNeedArooms(1)
                        } else {
                            dl.functions.getBookmarkedrooms(1)
                        }
                    }
                } else if (currentPath == 'travelcompanionbookmarks') {
                    if (dl.changes.selectedTCBookmarkType == 'Offered') {
                        dl.functions.getBookmarkedWantToBeATC(
                            dl.changes.paginationState.active
                        )
                    }

                    if (dl.changes.selectedTCBookmarkType == 'Wanted') {
                        dl.functions.getBookmarkedTC(
                            dl.changes.paginationState.active
                        )
                    }
                } else {
                    dl.functions.onLoadFunctions[currentPath]()
                    return response.status
                }
            }
        } catch (err) {
            return err
        }
    }
    dl.functions.deleteBookmark = deleteBookmark

    const getVisaQuestionDetail = async (visaQuestionId) => {
        var myHeaders = new Headers()

        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)

        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
        }

        if (userToken) {
            requestOptions.headers = myHeaders
        }

        try {
            dl.functions.modalsPlugin.openModal('loading')
            var baseUrl = process.env.BASE_URL
            var response = await fetch(
                // `https://melody-mocktail-6tjz.api.neutrodev.com/user/visaqandasDetail?visaQuestionId=${visaQuestionId}`,
                `${baseUrl}/user/visaqandasDetail?visaQuestionId=${visaQuestionId}`,
                requestOptions
            )
            const res = await response.json()
            dl.functions.modalsPlugin.closeModal('loading')
            if (response.status == 200) {
                var visaQuestion = res[0]
                if (visaQuestion.isBookmarked == true) {
                    visaQuestion['bookmarkactiveVisible'] = 'flex'
                    visaQuestion['bookmarkInactiveVisible'] = 'none'
                } else {
                    visaQuestion['bookmarkactiveVisible'] = 'none'
                    visaQuestion['bookmarkInactiveVisible'] = 'flex'
                }

                var date = new Date(res[0].cOn)
                var options = { year: 'numeric', month: 'long', day: 'numeric' }
                visaQuestion['postedOn'] =
                    'Posted on ' + date.toLocaleString(undefined, options)

                var ansdate = new Date(res[0].answeredOn)
                if (ansdate) {
                    var options = {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    }
                    visaQuestion['answeredOn'] = ansdate.toLocaleString(
                        undefined,
                        options
                    )
                }

                dl.changes.visaQuestionCommentDetail = visaQuestion
            }
        } catch (err) {
            return err
        }
    }
    dl.functions.getVisaQuestionDetail = getVisaQuestionDetail

    const getIWantToBeTC = async (limit, page) => {
        var myHeaders = new Headers()

        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)

        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
        }

        if (userToken) {
            requestOptions.headers = myHeaders
        }

        var filters = {}

        var filterobj = dl.changes.travelComapanionFilter
        for (var i = 0; i < filterobj.length; i++) {
            var filtername = filterobj[i].filterName
            if (filterobj[i].multi == true) {
                filters[filtername] = []
            }

            var options = filterobj[i].options
            for (var j = 0; j < options.length; j++) {
                if (options[j].selected == true && filterobj[i].multi == true) {
                    filters[filtername].push(options[j].name)
                } else if (
                    options[j].selected == true &&
                    filterobj[i].multi == false
                ) {
                    filters[filtername] = options[j].name
                }
            }
        }

        try {
            var mindistance = ''
            var maxdistance = ''
            if (filters['Nearby Airport'] == '0-50 Miles') {
                maxdistance = 50
            } else if (filters['Nearby Airport'] == '50-150 Miles') {
                mindistance = 50
                maxdistance = 150
            } else if (filters['Nearby Airport'] == '150 - 300 Miles') {
                mindistance = 150
                maxdistance = 300
            } else if (filters['Nearby Airport'] == '300+') {
                mindistance = 300
            } else {
                mindistance = ''
                maxdistance = ''
            }
            var language = filters.Language ? filters.Language : ''
            var airline = filters.Airlines ? filters.Airlines : ''
            var ticketBooked = filters['Already Booked']
                ? filters['Already Booked']
                : ''
            var vaccinated = filters.Vaccinated ? filters.Vaccinated : ''

            var zipcode = dl.changes.userDetail.zipCode
                ? dl.changes.userDetail.zipCode
                : '00601'
            var lat = ''
            var lng = ''
            var tipOrder = filters.Tip ? filters.Tip : null

            var fromDtate = dl.changes.tcTopFilter.fromDate
                ? dl.changes.tcTopFilter.fromDate
                : ''
            var toDtate = dl.changes.tcTopFilter.toDate
            var fromAirport = dl.changes.tcTopFilter.fromAirport
            var toAirport = dl.changes.tcTopFilter.toAirport

            var cOnDate = dl.changes.tcTopFilter.cOnDate
            var latest = dl.changes.tcTopFilter.latest == true ? 1 : ''
            const formattedDate = (date) =>
                `${date.getDate()} ${date.toLocaleString('default', {
                    month: 'short',
                })} ${date.getFullYear()}`

            dl.functions.modalsPlugin.openModal('loading')
            var baseUrl = process.env.BASE_URL
            var response = await fetch(
                // `https://melody-mocktail-6tjz.api.neutrodev.com/user/willBeATravelCompanion?zipcode=${zipcode}&limit=${limit}&page=${page}&mindistance=${mindistance}&maxdistance=${maxdistance}&language=${language}&airline=${airline}&ticketBooked=${ticketBooked}&vaccinated=${vaccinated}&lng=${lng}&lat=${lat}&tip=${tipOrder}&fromDate=${fromDtate}&toDate=${toDtate}&toAirport=${toAirport}&fromAirport=${fromAirport}`,
                `${baseUrl}/user/willBeATravelCompanion?zipcode=${zipcode}&limit=${limit}&page=${page}&mindistance=${mindistance}&maxdistance=${maxdistance}&language=${language}&airline=${airline}&ticketBooked=${ticketBooked}&vaccinated=${vaccinated}&lng=${lng}&lat=${lat}&tip=${tipOrder}&fromDate=${fromDtate}&toDate=${toDtate}&toAirport=${toAirport}&fromAirport=${fromAirport}&latest=${latest}&cOnDate=${cOnDate}`,
                requestOptions
            )
            const res = await response.json()

            dl.functions.modalsPlugin.closeModal('loading')
            if (res[0].result.length < 1) {
                dl.changes.needATCNoDataVisible = {
                    display: 'flex',
                }
                dl.changes.wantToBeATCList = []
                dl.changes.paginationState.total = 0
                dl.changes.paginationState.active = 0
                return
            } else {
                dl.changes.needATCNoDataVisible = {
                    display: 'none',
                }
            }
            dl.changes.paginationState.total = Math.ceil(
                res[0].count.totalCount / limit
            )
            dl.changes.paginationState.active = Number(page)
            var result = res[0].result
            if (response.status == 200) {
                for (var i = 0; i < result.length; i++) {
                    var city = result[i].to.city
                    var country = result[i].to.country
                    result[i]['city'] =
                        'Will be a Travel Companion to ' + city + ', ' + country
                    result[i]['from'] =
                        result[i].from.name +
                        ', ' +
                        result[i].from.city +
                        ', ' +
                        result[i].from.country_code
                    result[i]['to'] =
                        result[i].to.name +
                        ', ' +
                        result[i].to.city +
                        ', ' +
                        result[i].to.country_code
                    // result[i]["AdType"] = "wanted"
                    var postedBy = result[i].firstName
                        ? result[i].firstName.split(' ')
                        : ['user']
                    var postedOn = new Date(result[i].cOn)
                    const year = postedOn.getFullYear()
                    const month = (postedOn.getMonth() + 1)
                        .toString()
                        .padStart(2, '0')
                    const day = postedOn.getDate().toString().padStart(2, '0')
                    var date = `${month}-${day}-${year}`
                    result[i]['postedBy'] = postedBy[0] + ' on ' + date
                    // result[i]["postedBy"] = result[i].userDetail[0]?result[i].userDetail[0].name:"user"
                    // result[i]["tip"] = "$" + result[i].tip

                    if (result[i].promotion.status == true) {
                        result[i]['mmReferalVisible'] = 'flex'
                    } else {
                        result[i]['mmReferalVisible'] = 'none'
                    }

                    if (result[i].isBookmarked == true) {
                        result[i]['bookmarkactive'] = 'flex'
                        result[i]['bookmarkinactive'] = 'none'
                    } else {
                        result[i]['bookmarkactive'] = 'none'
                        result[i]['bookmarkinactive'] = 'flex'
                    }
                    if (result[i].ticketBooked == 'yes') {
                        result[i].dateString =
                            formattedDate(new Date(result[i].dateOfJourrney)) +
                            ' (' +
                            result[i].timeOfJourney +
                            ')'
                    } else {
                        result[i].dateString =
                            formattedDate(new Date(result[i].fromDate)) +
                            ' to ' +
                            formattedDate(new Date(result[i].toDate))
                    }
                    result[i]['adType'] = 'Offered'
                    result[i]['promotionVisible'] = 'none'
                    result[i]['EditDeleteVisible'] = 'none'
                    result[i]['contactVisible'] = 'flex'
                    result[i]['promotionDateVisible'] = 'none'
                }
                dl.changes.wantToBeATCList = result
                return { status: response.status, result: result }
            } else {
                return 'Something went wrong'
            }
        } catch (err) {
            return err
        }
    }
    dl.functions.getIWantToBeTC = getIWantToBeTC

    const latestWantToBeTc = async (limit, page) => {
        var myHeaders = new Headers()

        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)

        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
        }

        if (userToken) {
            requestOptions.headers = myHeaders
        }

        try {
            var zipcode = dl.changes.userDetail.zipCode
                ? dl.changes.userDetail.zipCode
                : '00601'

            dl.functions.modalsPlugin.openModal('loading')
            var baseUrl = process.env.BASE_URL
            var response = await fetch(
                // `https://melody-mocktail-6tjz.api.neutrodev.com/user/willBeATravelCompanion?zipcode=${zipcode}&limit=${limit}&page=${page}&mindistance=${mindistance}&maxdistance=${maxdistance}&language=${language}&airline=${airline}&ticketBooked=${ticketBooked}&vaccinated=${vaccinated}&lng=${lng}&lat=${lat}&tip=${tipOrder}&fromDate=${fromDtate}&toDate=${toDtate}&toAirport=${toAirport}&fromAirport=${fromAirport}`,
                `${baseUrl}/user/willBeATravelCompanion?zipcode=${zipcode}&limit=${limit}&page=${page}&latest=1`,
                requestOptions
            )
            const res = await response.json()

            dl.functions.modalsPlugin.closeModal('loading')
            if (res[0].result.length < 1) {
                // dl.changes.needATCNoDataVisible = {
                //     display: 'flex',
                // }
                // dl.changes.wantToBeATCList = []
                dl.changes.paginationState.total = 0
                dl.changes.paginationState.active = 0
                return
            } else {
                // dl.changes.needATCNoDataVisible = {
                //     display: 'none',
                // }
            }
            dl.changes.paginationState.total = Math.ceil(
                res[0].count.totalCount / limit
            )
            dl.changes.paginationState.active = Number(page)
            var result = res[0].result
            if (response.status == 200) {
                for (var i = 0; i < result.length; i++) {
                    var city = result[i].to.city
                    var country = result[i].to.country
                    result[i]['city'] =
                        'Will be a Travel Companion to ' + city + ', ' + country
                    result[i]['from'] =
                        result[i].from.name +
                        ', ' +
                        result[i].from.city +
                        ', ' +
                        result[i].from.country_code
                    result[i]['to'] =
                        result[i].to.name +
                        ', ' +
                        result[i].to.city +
                        ', ' +
                        result[i].to.country_code

                    // result[i]["AdType"] = "wanted"
                    var postedBy = result[i].firstName
                        ? result[i].firstName.split(' ')
                        : ['user']
                    var postedOn = new Date(result[i].cOn)
                    const year = postedOn.getFullYear()
                    const month = (postedOn.getMonth() + 1)
                        .toString()
                        .padStart(2, '0')
                    const day = postedOn.getDate().toString().padStart(2, '0')
                    var date = `${month}-${day}-${year}`
                    result[i]['postedBy'] = postedBy[0] + ' on ' + date
                    // result[i]["postedBy"] = result[i].userDetail[0]?result[i].userDetail[0].name:"user"
                    // result[i]["tip"] = "$" + result[i].tip

                    if (result[i].promotion.status == true) {
                        result[i]['mmReferalVisible'] = 'flex'
                    } else {
                        result[i]['mmReferalVisible'] = 'none'
                    }

                    if (result[i].isBookmarked == true) {
                        result[i]['bookmarkactive'] = 'flex'
                        result[i]['bookmarkinactive'] = 'none'
                    } else {
                        result[i]['bookmarkactive'] = 'none'
                        result[i]['bookmarkinactive'] = 'flex'
                    }
                    if (result[i].ticketBooked == 'yes') {
                        result[i].dateString =
                            formattedDate(new Date(result[i].dateOfJourrney)) +
                            ' (' +
                            result[i].timeOfJourney +
                            ')'
                    } else {
                        result[i].dateString =
                            formattedDate(new Date(result[i].fromDate)) +
                            ' to ' +
                            formattedDate(new Date(result[i].toDate))
                    }
                    result[i]['adType'] = 'Offered'
                    result[i]['promotionVisible'] = 'none'
                    result[i]['EditDeleteVisible'] = 'none'
                    result[i]['contactVisible'] = 'flex'
                    result[i]['promotionDateVisible'] = 'none'
                }
                dl.changes.latestTravelCompanion = result
                return { status: response.status, result: result }
            } else {
                return 'Something went wrong'
            }
        } catch (err) {
            return err
        }
    }
    dl.functions.latestWantToBeTc = latestWantToBeTc

    const getINeedATC = async (limit, page) => {
        var myHeaders = new Headers()

        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)

        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
        }

        if (userToken) {
            requestOptions.headers = myHeaders
        }

        var filters = {}

        var filterobj = dl.changes.travelComapanionFilter
        for (var i = 0; i < filterobj.length; i++) {
            var filtername = filterobj[i].filterName
            if (filterobj[i].multi == true) {
                filters[filtername] = []
            }

            var options = filterobj[i].options
            for (var j = 0; j < options.length; j++) {
                if (options[j].selected == true && filterobj[i].multi == true) {
                    filters[filtername].push(options[j].name)
                } else if (
                    options[j].selected == true &&
                    filterobj[i].multi == false
                ) {
                    filters[filtername] = options[j].name
                }
            }
        }

        try {
            var mindistance = ''
            var maxdistance = ''
            if (filters['Nearby Airport'] == '0-50 Miles') {
                maxdistance = 50
            } else if (filters['Nearby Airport'] == '50-150 Miles') {
                mindistance = 50
                maxdistance = 150
            } else if (filters['Nearby Airport'] == '150 - 300 Miles') {
                mindistance = 150
                maxdistance = 300
            } else if (filters['Nearby Airport'] == '300+') {
                mindistance = 300
            } else {
                mindistance = ''
                maxdistance = ''
            }

            var language = filters.Language ? filters.Language : ''
            var airline = filters.Airlines ? filters.Airlines : ''
            var ticketBooked = filters['Already Booked']
                ? filters['Already Booked']
                : ''
            var vaccinated = filters.Vaccinated ? filters.Vaccinated : ''

            var zipcode = dl.changes.userDetail.zipCode
                ? dl.changes.userDetail.zipCode
                : '00601'
            var lat = ''
            var lng = ''
            var tipOrder = filters.Tip ? filters.Tip : null

            var fromDtate = dl.changes.tcTopFilter.fromDate
                ? dl.changes.tcTopFilter.fromDate
                : ''
            var toDtate = dl.changes.tcTopFilter.toDate
            var fromAirport = dl.changes.tcTopFilter.fromAirport
            var toAirport = dl.changes.tcTopFilter.toAirport
            const formattedDate = (date) =>
                `${date.getDate()} ${date.toLocaleString('default', {
                    month: 'short',
                })} ${date.getFullYear()}`

            var cOnDate = dl.changes.tcTopFilter.cOnDate
            var latest = dl.changes.tcTopFilter.latest == true ? 1 : ''

            dl.functions.modalsPlugin.openModal('loading')
            var baseUrl = process.env.BASE_URL
            var response = await fetch(
                // `https://melody-mocktail-6tjz.api.neutrodev.com/user/travelCompanion?zipcode=${zipcode}&limit=${limit}&page=${page}&mindistance=${mindistance}&maxdistance=${maxdistance}&language=${language}&airline=${airline}&ticketBooked=${ticketBooked}&vaccinated=${vaccinated}&tip=${tipOrder}`,
                `${baseUrl}/user/travelCompanion?zipcode=${zipcode}&limit=${limit}&page=${page}&mindistance=${mindistance}&maxdistance=${maxdistance}&language=${language}&airline=${airline}&ticketBooked=${ticketBooked}&vaccinated=${vaccinated}&lng=${lng}&lat=${lat}&tip=${tipOrder}&fromDate=${fromDtate}&toDate=${toDtate}&toAirport=${toAirport}&fromAirport=${fromAirport}&latest=${latest}&cOnDate=${cOnDate}`,
                requestOptions
            )

            const res = await response.json()
            dl.functions.modalsPlugin.closeModal('loading')
            if (res[0].result.length < 1) {
                // dl.changes.wantToBeTCNoDataVisible = {
                //   display: "flex",
                // };
                // dl.changes.needATCList = [];
                // dl.changes.paginationState.total = 0;
                // dl.changes.paginationState.active = 0;
                // return;
                dl.changes.needATCNoDataVisible = {
                    display: 'flex',
                }
                dl.changes.wantToBeATCList = []
                dl.changes.paginationState.total = 0
                dl.changes.paginationState.active = 0
                return
            } else {
                // dl.changes.wantToBeTCNoDataVisible = {
                //   display: "none",
                // };
                dl.changes.needATCNoDataVisible = {
                    display: 'none',
                }
            }

            dl.changes.paginationState.total = Math.ceil(
                res[0].count.totalCount / limit
            )
            dl.changes.paginationState.active = Number(page)
            var result = res[0].result
            if (response.status == 200) {
                for (var i = 0; i < result.length; i++) {
                    var city = result[i].to.city
                    var country = result[i].to.country
                    result[i]['city'] =
                        'Need a Travel Companion to ' + city + ', ' + country
                    result[i]['from'] =
                        result[i].from.name +
                        ', ' +
                        result[i].from.city +
                        ', ' +
                        result[i].from.country_code
                    result[i]['to'] =
                        result[i].to.name +
                        ', ' +
                        result[i].to.city +
                        ', ' +
                        result[i].to.country_code

                    var postedBy = result[i].firstName
                        ? result[i].firstName.split(' ')
                        : ['user']
                    var postedOn = new Date(result[i].cOn)
                    const year = postedOn.getFullYear()
                    const month = (postedOn.getMonth() + 1)
                        .toString()
                        .padStart(2, '0')
                    const day = postedOn.getDate().toString().padStart(2, '0')
                    var date = `${month}-${day}-${year}`
                    result[i]['postedBy'] = postedBy[0] + ' on ' + date
                    // result[i]["postedBy"] = result[i].userDetail[0]?result[i].userDetail[0].name:"user"
                    result[i]['tip'] = '$' + result[i].tip

                    if (result[i].promotion.status == true) {
                        result[i]['mmReferalVisible'] = 'flex'
                    } else {
                        result[i]['mmReferalVisible'] = 'none'
                    }

                    if (result[i].isBookmarked == true) {
                        result[i]['bookmarkactive'] = 'flex'
                        result[i]['bookmarkinactive'] = 'none'
                    } else {
                        result[i]['bookmarkactive'] = 'none'
                        result[i]['bookmarkinactive'] = 'flex'
                    }
                    result[i]['promotionVisible'] = 'none'
                    result[i]['EditDeleteVisible'] = 'none'
                    result[i]['contactVisible'] = 'flex'
                    result[i]['promotionDateVisible'] = 'none'
                    result[i]['adType'] = 'Wanted'
                    if (result[i].ticketBooked == 'yes') {
                        result[i].dateString =
                            formattedDate(new Date(result[i].dateOfJourrney)) +
                            ' (' +
                            result[i].timeOfJourney +
                            ')'
                    } else {
                        result[i].dateString =
                            formattedDate(new Date(result[i].fromDate)) +
                            ' to ' +
                            formattedDate(new Date(result[i].toDate))
                    }
                }
                // dl.changes.needATCList = result;
                dl.changes.wantToBeATCList = result
                dl.functions.modalsPlugin.closeModal('loading')
                return { status: response.status, result: result }
            } else {
                dl.functions.modalsPlugin.closeModal('loading')
                return 'Something went wrong'
            }
        } catch (err) {
            return err
        }
    }
    dl.functions.getINeedATC = getINeedATC

    const getAirports = async (search) => {
        var myHeaders = new Headers()
        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow',
        }
        var baseUrl = process.env.BASE_URL
        try {
            var response = await fetch(
                // `https://melody-mocktail-6tjz.api.neutrodev.com/user/airports?search=${search}`,
                `${baseUrl}/user/airports?search=${search}`,
                requestOptions
            )

            const res = await response.json()
            var airports = []
            var airportdetails = []
            for (var i = 0; i < res.length; i++) {
                var optionName = `${res[i].name}, ${res[i].city}, ${res[i].country}`
                airports.push(optionName)
                var obj = {}
                obj['city_code'] = res[i].iata_code ? res[i].iata_code : null
                obj['city'] = res[i].city ? res[i].city : ''
                obj['country'] = res[i].country ? res[i].country : ''
                obj['state'] = res[i].state ? res[i].state : ''
                obj['country_code'] = res[i].country_code
                obj['name'] = res[i].name
                obj['lat'] = res[i].lat
                obj['lng'] = res[i].lng
                obj['airportId'] = res[i]._id
                airportdetails.push(obj)
            }
            return { airports: airports, airportdetails: airportdetails }
        } catch (err) {
            return err
        }
    }
    dl.functions.getAirports = getAirports

    const validateineedatcform = () => {
        let isValid = true
        let obj = dl.changes.ineedatcform

        if (dl.changes.ineedatcform.bookedTicket.value == 'yes') {
            var requiredFields = [
                'firstName',
                'lastName',
                'from',
                'to',
                'bookedTicket',
                'date',
                'time',
                'airline',
                'email',
                'phone',
                'languages',
                'vaccinated',
                'tip',
            ] //,'addStop','addStop2'
        } else {
            var requiredFields = [
                'firstName',
                'lastName',
                'from',
                'to',
                'bookedTicket',
                'fromDate',
                'toDate',
                'preferredAirline',
                'email',
                'phone',
                'languages',
                'vaccinated',
                'tip',
            ]
        }

        for (let key in obj) {
            if (requiredFields.includes(key)) {
                if (obj[key].value == '') {
                    dl.changes.ineedatcform[key]['inputBorderColor'] =
                        'rgba(248,246,246,1)'
                    dl.changes.ineedatcform[key]['showErrorMessage'] = 'flex'
                    isValid = false
                }
            }
        }

        return isValid
    }
    dl.functions.validateineedatcform = validateineedatcform

    const createNeedATC = async (body) => {
        var myHeaders = new Headers()
        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)
        myHeaders.append('Content-Type', 'application/json')

        var raw = JSON.stringify(body)

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
        }

        try {
            var valid = dl.functions.validateineedatcform()
            if (valid == false) {
                return
            }
            dl.functions.modalsPlugin.openModal('loading')
            var baseUrl = process.env.BASE_URL
            var response = await fetch(
                // 'https://melody-mocktail-6tjz.api.neutrodev.com/user/travelCompanion/create',
                `${baseUrl}/user/travelCompanion/create`,
                requestOptions
            )
            const res = await response.json()
            dl.functions.modalsPlugin.closeModal('loading')
            if (response.status == 200) {
                return res
            }
        } catch (err) {
            return err
        }
    }
    dl.functions.createNeedATC = createNeedATC

    const validateWantToBeTCForm = () => {
        let isValid = true
        let obj = dl.changes.iwanttobetcform

        if (dl.changes.iwanttobetcform.bookedTicket.value == 'yes') {
            var requiredFields = [
                'firstName',
                'lastName',
                'from',
                'to',
                'bookedTicket',
                'date',
                'time',
                'airline',
                'email',
                'phone',
                'languages',
                'vaccinated',
                'tip',
            ] //'addStop','addStop2',
        } else {
            var requiredFields = [
                'firstName',
                'lastName',
                'from',
                'to',
                'bookedTicket',
                'fromDate',
                'toDate',
                'preferredAirline',
                'email',
                'phone',
                'languages',
                'vaccinated',
                'tip',
            ]
        }

        for (let key in obj) {
            if (requiredFields.includes(key)) {
                if (obj[key].value == '') {
                    dl.changes.iwanttobetcform[key]['inputBorderColor'] =
                        'rgba(248,246,246,1)'
                    dl.changes.iwanttobetcform[key]['showErrorMessage'] = 'flex'
                    isValid = false
                }
            }
        }

        return isValid
    }
    dl.functions.validateWantToBeTCForm = validateWantToBeTCForm

    const createWantToBeTC = async (body) => {
        var myHeaders = new Headers()
        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)
        myHeaders.append('Content-Type', 'application/json')

        var raw = JSON.stringify(body)

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
        }

        try {
            var valid = dl.functions.validateWantToBeTCForm()
            if (valid == false) {
                return
            }
            dl.functions.modalsPlugin.openModal('loading')
            var baseUrl = process.env.BASE_URL
            var response = await fetch(
                // 'https://melody-mocktail-6tjz.api.neutrodev.com/user/willBeATravelCompanion/create',
                `${baseUrl}/user/willBeATravelCompanion/create`,
                requestOptions
            )
            const res = await response.json()
            dl.functions.modalsPlugin.closeModal('loading')
            if (response.status == 200) {
                return res
            }
        } catch (err) {
            return err
        }
    }
    dl.functions.createWantToBeTC = createWantToBeTC

    const getWantToBeTcDetail = async (tcId) => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
        }

        try {
            dl.functions.modalsPlugin.openModal('loading')
            var baseUrl = process.env.BASE_URL
            var response = await fetch(
                // `https://melody-mocktail-6tjz.api.neutrodev.com/user/willBeATravelCompanionDetail?tcId=${tcId}`,
                `${baseUrl}/user/willBeATravelCompanionDetail?tcId=${tcId}`,
                requestOptions
            )

            const res = await response.json()

            dl.functions.modalsPlugin.closeModal('loading')

            var result = res[0]

            result['title'] =
                'Want to be a travel companion to ' +
                result.to.city +
                ', ' +
                result.to.country

            var cOndate = new Date(result.cOn)
            var options = {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                hour12: false,
            }
            result['postedOn'] = cOndate.toLocaleString(undefined, options)
            result['postedBy'] = result.userDetail[0].name
            result['tip'] = '$' + result.tip
            if (result.ticketBooked == 'yes') {
                result['tickedBookedVisible'] = 'flex'
                result['dateTimeVisible'] = 'flex'
                result['ticketYetToBookVisible'] = 'none'
                result['dateRangeVisible'] = 'none'
                result['ticketStatus'] = 'Booked'
                result['middleTitle'] = 'Date & Time:'
                result['rightboxTitle'] = 'Airline:'

                result['dateOfJourrneyISO'] = new Date(result.dateOfJourrney)

                var date = new Date(result.dateOfJourrney)
                var options = {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: false,
                }
                result['dateOfJourrney'] = date.toLocaleString(
                    undefined,
                    options
                )
            } else {
                result['tickedBookedVisible'] = 'none'
                result['dateTimeVisible'] = 'flex'
                result['ticketYetToBookVisible'] = 'flex'
                result['dateRangeVisible'] = 'none'
                result['ticketStatus'] = 'Yet To Book'
                result['middleTitle'] = 'From Date:'
                result['rightboxTitle'] = 'To Date:'

                var date = new Date(result.fromDate)
                var options = { year: 'numeric', month: 'long', day: 'numeric' }
                var fromdate = date.toLocaleString(undefined, options)
                result['dateOfJourrney'] = fromdate
                result['fromDate'] = fromdate

                var date = new Date(result.toDate)
                var options = { year: 'numeric', month: 'long', day: 'numeric' }
                var todate = date.toLocaleString(undefined, options)
                result['toDate'] = todate
                result['airline'] = todate
            }

            result['jouneyFrom'] =
                result.from.name +
                ', ' +
                result.from.city +
                ', ' +
                result.from.country_code
            result['jouneyto'] =
                result.to.name +
                ', ' +
                result.to.city +
                ', ' +
                result.to.country_code
            var languages = []
            if (result.languageKnown.length > 0) {
                for (var i = 0; i < result.languageKnown.length; i++) {
                    var obj = {
                        value: result.languageKnown[i],
                    }
                    languages.push(obj)
                }
            }
            result['languagesKnown'] = languages

            var preferedAirlines = []
            if (result.preferredAirline.length > 0) {
                for (var i = 0; i < result.preferredAirline.length; i++) {
                    var obj = {
                        value: result.preferredAirline[i],
                    }
                    preferedAirlines.push(obj)
                }
            }
            result['preferedAirlines'] = preferedAirlines
            if (result.stops.length > 0) {
                result['stop1'] = result.stops[0] ? result.stops[0] : 'No Info'
                result['stop2'] = result.stops[1] ? result.stops[1] : 'No Info'
            } else {
                result['stop1'] = 'No Info'
                result['stop2'] = 'No Info'
            }

            dl.changes.needATcDetail = result
            return res
        } catch (err) {
            return err
        }
    }
    dl.functions.getWantToBeTcDetail = getWantToBeTcDetail

    const getNeedATcDetail = async (tcId) => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
        }

        try {
            dl.functions.modalsPlugin.openModal('loading')
            var baseUrl = process.env.BASE_URL
            var response = await fetch(
                // `https://melody-mocktail-6tjz.api.neutrodev.com/user/travelCompanionDetail?tcId=${tcId}`,
                `${baseUrl}/user/travelCompanionDetail?tcId=${tcId}`,
                requestOptions
            )

            const res = await response.json()

            dl.functions.modalsPlugin.closeModal('loading')

            var result = res[0]

            result['title'] =
                'Need a travel companion to ' +
                result.to.city +
                ', ' +
                result.to.country

            var cOndate = new Date(result.cOn)
            var options = {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                hour12: false,
            }
            result['postedOn'] = cOndate.toLocaleString(undefined, options)
            result['postedBy'] = result.userDetail[0].name
            result['tip'] = '$' + result.tip
            if (result.ticketBooked == 'yes') {
                result['tickedBookedVisible'] = 'flex'
                result['dateTimeVisible'] = 'flex'
                result['ticketYetToBookVisible'] = 'none'
                result['dateRangeVisible'] = 'none'
                result['ticketStatus'] = 'Booked'

                result['dateOfJourrneyISO'] = new Date(result.dateOfJourrney)

                var date = new Date(result.dateOfJourrney)
                var options = {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: false,
                }
                result['dateOfJourney'] = date.toLocaleString(
                    undefined,
                    options
                )
            } else {
                result['tickedBookedVisible'] = 'none'
                result['dateTimeVisible'] = 'flex'
                result['ticketYetToBookVisible'] = 'flex'
                result['dateRangeVisible'] = 'none'
                result['ticketStatus'] = 'Yet To Book'
                var date = new Date(result.fromDate)
                var options = { year: 'numeric', month: 'long', day: 'numeric' }
                var fromdate = date.toLocaleString(undefined, options)
                result['fromDate'] = fromdate

                var date = new Date(result.toDate)
                var options = { year: 'numeric', month: 'long', day: 'numeric' }
                var todate = date.toLocaleString(undefined, options)
                result['toDate'] = todate
                result['dateOfJourney'] = fromdate + ' to ' + todate
                result['dateRange'] = fromdate + ' to ' + todate
            }
            result['jouneyFrom'] =
                result.from.name +
                ', ' +
                result.from.city +
                ', ' +
                result.from.country_code
            result['jouneyto'] =
                result.to.name +
                ', ' +
                result.to.city +
                ', ' +
                result.to.country_code

            var languages = []
            if (result.languageKnown.length > 0) {
                for (var i = 0; i < result.languageKnown.length; i++) {
                    var obj = {
                        value: result.languageKnown[i],
                    }
                    languages.push(obj)
                }
            }
            result['languagesKnown'] = languages

            var preferedAirlines = []
            if (result.preferredAirline.length > 0) {
                for (var i = 0; i < result.preferredAirline.length; i++) {
                    var obj = {
                        value: result.preferredAirline[i],
                    }
                    preferedAirlines.push(obj)
                }
            }
            result['preferedAirlines'] = preferedAirlines
            if (result.stops.length > 0) {
                result['stop1'] = result.stops[0] ? result.stops[0] : 'No Info'
                result['stop2'] = result.stops[1] ? result.stops[1] : 'No Info'
            } else {
                result['stop1'] = 'No Info'
                result['stop2'] = 'No Info'
            }

            dl.changes.wantToBeATcDetail = result

            return res
        } catch (err) {
            return err
        }
    }
    dl.functions.getNeedATcDetail = getNeedATcDetail

    const getTcListing = async (limit, page) => {
        var myHeaders = new Headers()
        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow',
        }

        try {
            dl.functions.modalsPlugin.openModal('loading')
            var baseUrl = process.env.BASE_URL
            var response = await fetch(
                // `https://melody-mocktail-6tjz.api.neutrodev.com/user/travelCompanionListing?limit=${limit}&page=${page}`,
                `${baseUrl}/user/travelCompanionListing?limit=${limit}&page=${page}`,
                requestOptions
            )

            const res = await response.json()

            dl.functions.modalsPlugin.closeModal('loading')
            if (res.result.length < 1) {
                dl.changes.tcListingNoDataVisible = {
                    display: 'flex',
                }
                dl.changes.tcListingList = []
                dl.changes.paginationState.total = 0
                dl.changes.paginationState.active = 0
                return
            } else {
                dl.changes.tcListingNoDataVisible = {
                    display: 'none',
                }
            }

            dl.changes.paginationState.total = res.totalPage
            dl.changes.paginationState.active = Number(page)
            var result = res.result
            if (response.status == 200) {
                for (var i = 0; i < result.length; i++) {
                    result[i]['city'] =
                        result[i].to.city + ',' + result[i].to.country
                    result[i]['from'] = result[i].from.name
                    result[i]['to'] = result[i].to.name
                    result[i]['postedBy'] = dl.changes.userDetail.name
                    result[i]['tip'] = '$' + result[i].tip

                    if (result[i].promotion.status == true) {
                        result[i]['mmReferalVisible'] = 'flex'
                        result[i]['promotionVisible'] = 'none'

                        var date = new Date(result[i].promotion.promotionFrom)
                        var options = {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        }
                        result[i]['promotionstartDate'] =
                            'Being promoted from' +
                            ' ' +
                            date.toLocaleString(undefined, options)

                        var currentDate = new Date()
                        var targetDate = new Date(
                            result[i].promotion.promotionTo
                        )
                        currentDate.setHours(0, 0, 0, 0)
                        targetDate.setHours(0, 0, 0, 0)
                        var timeDiff =
                            targetDate.getTime() - currentDate.getTime()
                        result[i]['promotionDayleft'] =
                            Math.ceil(timeDiff / (1000 * 60 * 60 * 24)) +
                            'days left'
                        result[i]['promotionDateVisible'] = 'flex'
                    } else {
                        result[i]['mmReferalVisible'] = 'none'
                        result[i]['promotionVisible'] = 'flex'
                        result[i]['promotionDateVisible'] = 'none'
                    }

                    result[i]['bookmarkactive'] = 'none'
                    result[i]['bookmarkinactive'] = 'none'

                    result[i]['EditDeleteVisible'] = 'flex'
                    result[i]['contactVisible'] = 'none'

                    if (result[i].ticketBooked == 'yes') {
                        result[i].dateString =
                            formattedDate(new Date(result[i].dateOfJourrney)) +
                            ' (' +
                            result[i].timeOfJourney +
                            ')'
                    } else {
                        result[i].dateString =
                            formattedDate(new Date(result[i].fromDate)) +
                            ' to ' +
                            formattedDate(new Date(result[i].toDate))
                    }
                }

                dl.changes.tcListingList = result
                return { status: response.status, result: result }
            } else {
                return 'Something went wrong'
            }
        } catch (err) {
            return err
        }
    }
    dl.functions.getTcListing = getTcListing

    const getWillBeATcListing = async (limit, page) => {
        var myHeaders = new Headers()
        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow',
        }

        try {
            dl.functions.modalsPlugin.openModal('loading')
            var baseUrl = process.env.BASE_URL
            var response = await fetch(
                // `https://melody-mocktail-6tjz.api.neutrodev.com/user/willBeATravelCompanionListing?limit=${limit}&page=${page}`,
                `${baseUrl}/user/willBeATravelCompanionListing?limit=${limit}&page=${page}`,
                requestOptions
            )

            const res = await response.json()

            dl.functions.modalsPlugin.closeModal('loading')
            if (res.result.length < 1) {
                dl.changes.tcListingNoDataVisible = {
                    display: 'flex',
                }
                dl.changes.willBeATcListingList = []
                dl.changes.paginationState.total = 0
                dl.changes.paginationState.active = 0
                return
            } else {
                dl.changes.tcListingNoDataVisible = {
                    display: 'none',
                }
            }

            dl.changes.paginationState.total = res.totalPage
            dl.changes.paginationState.active = Number(page)
            var result = res.result
            if (response.status == 200) {
                for (var i = 0; i < result.length; i++) {
                    result[i]['city'] = result[i].to.city_code
                    result[i]['from'] = result[i].from.name
                    result[i]['to'] = result[i].to.name
                    result[i]['postedBy'] = dl.changes.userDetail.name
                    result[i]['tip'] = '$' + result[i].tip

                    if (result[i].promotion.status == true) {
                        result[i]['mmReferalVisible'] = 'flex'
                        result[i]['promotionVisible'] = 'none'

                        var date = new Date(result[i].promotion.promotionFrom)
                        var options = {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        }
                        result[i]['promotionstartDate'] =
                            'Being promoted from' +
                            ' ' +
                            date.toLocaleString(undefined, options)

                        var currentDate = new Date()
                        var targetDate = new Date(
                            result[i].promotion.promotionTo
                        )
                        currentDate.setHours(0, 0, 0, 0)
                        targetDate.setHours(0, 0, 0, 0)
                        var timeDiff =
                            targetDate.getTime() - currentDate.getTime()
                        result[i]['promotionDayleft'] =
                            Math.ceil(timeDiff / (1000 * 60 * 60 * 24)) +
                            'days left'
                        result[i]['promotionDateVisible'] = 'flex'
                    } else {
                        result[i]['mmReferalVisible'] = 'none'
                        result[i]['promotionVisible'] = 'flex'
                        result[i]['promotionDateVisible'] = 'none'
                    }

                    result[i]['bookmarkactive'] = 'none'
                    result[i]['bookmarkinactive'] = 'none'

                    result[i]['EditDeleteVisible'] = 'flex'
                    result[i]['contactVisible'] = 'none'

                    if (result[i].ticketBooked == 'yes') {
                        result[i].dateString =
                            formattedDate(new Date(result[i].dateOfJourrney)) +
                            ' (' +
                            result[i].timeOfJourney +
                            ')'
                    } else {
                        result[i].dateString =
                            formattedDate(new Date(result[i].fromDate)) +
                            ' to ' +
                            formattedDate(new Date(result[i].toDate))
                    }
                }

                dl.changes.willBeATcListingList = result

                return { status: response.status, result: result }
            } else {
                return 'Something went wrong'
            }
        } catch (err) {
            return err
        }
    }
    dl.functions.getWillBeATcListing = getWillBeATcListing

    const updateTC = async (body, del) => {
        var myHeaders = new Headers()
        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)
        myHeaders.append('Content-Type', 'application/json')

        var raw = JSON.stringify(body)

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
        }

        try {
            var valid = dl.functions.validateineedatcform()
            if (valid == false && !del) {
                return
            }
            dl.functions.modalsPlugin.openModal('loading')
            var baseUrl = process.env.BASE_URL
            var response = await fetch(
                // 'https://melody-mocktail-6tjz.api.neutrodev.com/user/travelCompanion/update',
                `${baseUrl}/user/travelCompanion/update`,
                requestOptions
            )
            const res = await response.json()
            dl.functions.modalsPlugin.closeModal('loading')
            if (response.status == 200) {
                return response.status
            }
        } catch (err) {
            return err
        }
    }
    dl.functions.updateTC = updateTC

    const updateWillBeATc = async (body, del) => {
        var myHeaders = new Headers()
        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)
        myHeaders.append('Content-Type', 'application/json')

        var raw = JSON.stringify(body)

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
        }

        try {
            var valid = dl.functions.validateWantToBeTCForm()
            if (valid == false && !del) {
                return
            }
            dl.functions.modalsPlugin.openModal('loading')
            var baseUrl = process.env.BASE_URL
            var response = await fetch(
                // 'https://melody-mocktail-6tjz.api.neutrodev.com/user/willBeATravelCompanion/update',
                `${baseUrl}/user/willBeATravelCompanion/update`,
                requestOptions
            )
            const res = await response.json()
            dl.functions.modalsPlugin.closeModal('loading')
            if (response.status == 200) {
                return response.status
            }
        } catch (err) {
            return err
        }
    }
    dl.functions.updateWillBeATc = updateWillBeATc

    const submitContactRequest = async () => {
        let obj = dl.changes.contactUSForm
        obj.phone =
            dl.changes.contactUSForm.countryCode +
            dl.changes.contactUSForm.phone

        if (obj.validated == false) {
            alert('Invalid captcha')
            return
        }

        if (obj.message == '') {
            alert('Please enter message')
            return
        }

        delete obj.validated

        delete obj.countryCode

        var userToken = dl.functions.common.getCookie('userToken')

        var myHeaders = new Headers()
        myHeaders.append('Authorization', userToken)
        myHeaders.append('Content-Type', 'application/json')

        var raw = JSON.stringify(obj)

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
        }

        dl.functions.modalsPlugin.openModal('loading')
        var baseUrl = process.env.BASE_URL
        var response = await fetch(
            // 'https://melody-mocktail-6tjz.api.neutrodev.com/user/contactus/create',
            `${baseUrl}/user/contactus/create`,
            requestOptions
        )

        dl.functions.modalsPlugin.closeModal('loading')
        dl.functions.modalsPlugin.closeModal('contactAdvertiserLg')
        dl.functions.modalsPlugin.closeModal('contactAdvertiserS')
    }

    dl.functions.submitContactRequest = submitContactRequest

    const setUniversalFilters = async () => {
        var currentPath = dl.functions.common.getLastPath()
        if (currentPath == 'travelsuggestions') {
            dl.changes.universalFilter = dl.changes.travelSuggestionFilters
        } else if (
            currentPath == 'travelcompanion' ||
            currentPath == 'iwanttobetravelcompanion'
        ) {
            dl.changes.universalFilter = dl.changes.travelComapanionFilter
        } else if (currentPath == 'ihaveahomerental') {
            dl.changes.universalFilter = dl.changes.needAHomeFilter
        } else if (currentPath == 'homerentals') {
            dl.changes.universalFilter = dl.changes.offeredHomeFilter
        } else if (currentPath == 'ihavearoom') {
            dl.changes.universalFilter = dl.changes.wantedroomFilter
        } else if (currentPath == 'rooms') {
            dl.changes.universalFilter = dl.changes.offeredroomFilter
        } else if (
            currentPath == 'ridesharing' ||
            currentPath == 'ihavearide'
        ) {
            dl.changes.universalFilter = dl.changes.rideSharingFilter
        } else if (currentPath == 'visaquestions' || currentPath == 'faq') {
            dl.changes.universalFilter = dl.changes.visaFilter
        } else if (currentPath == 'blogs') {
            dl.changes.universalFilter = dl.changes.blogsFilter
        } else if (currentPath == 'moviesuggestions') {
            dl.changes.universalFilter = dl.changes.moviesFilter
        }
    }
    dl.functions.setUniversalFilters = setUniversalFilters

    const applyUniversalFilter = async () => {
        var currentPath = dl.functions.common.getLastPath()
        if (currentPath == 'travelsuggestions') {
            dl.functions.applyTravelSuggestionFilter()
        } else if (currentPath == 'travelcompanion') {
            var tcType = dl.changes.travelCompanionTypeSelector.value
            if (tcType == 'Offered') {
                dl.functions.getIWantToBeTC(8, 1)
            }

            if (tcType == 'Wanted') {
                dl.functions.getINeedATC(8, 1)
            }
            // dl.functions.getIWantToBeTC("8", "1");
        } else if (currentPath == 'iwanttobetravelcompanion') {
            dl.functions.getINeedATC('8', '1')
        } else if (currentPath == 'ihaveahomerental') {
            dl.functions.applyNeddAHomeFilter()
        } else if (currentPath == 'homerentals') {
            dl.functions.applyOfferedHomeFilter()
        } else if (currentPath == 'ihavearoom') {
            dl.functions.applyNeedARoomFilter()
        } else if (currentPath == 'rooms') {
            dl.functions.applyRoomFilter()
        } else if (currentPath == 'ridesharing') {
            if (dl.changes.rideSharingTypeSelector.value == 'Offered') {
                dl.functions.applyRideSharingFilter()
            }

            if (dl.changes.rideSharingTypeSelector.value == 'Wanted') {
                dl.functions.applyhaveARideFilter()
            }
        } else if (currentPath == 'ihavearide') {
            dl.functions.applyhaveARideFilter()
        } else if (currentPath == 'visaquestions') {
            dl.functions.applyVisaQuestionFilters()
        } else if (currentPath == 'blogs') {
            dl.functions.applyBlogFilter()
        } else if (currentPath == 'moviesuggestions') {
            dl.functions.applyMovieSuggestionFilter()
        } else if (currentPath == 'faq') {
            dl.functions.applyVisafaqFilters()
        }

        var universalFilters = []
        for (var i = 0; i < dl.changes.universalFilter.length; i++) {
            for (
                var j = 0;
                j < dl.changes.universalFilter[i].options.length;
                j++
            ) {
                var options = dl.changes.universalFilter[i].options
                if (options[j].selected == true) {
                    var obj = {
                        value: options[j].name,
                        optionIndex: j,
                        filterIndex: i,
                    }
                    universalFilters.push(obj)
                }
            }
        }
        dl.changes.universalFiltersList = universalFilters
    }
    dl.functions.applyUniversalFilter = applyUniversalFilter

    const removeUniversalFilter = async () => {
        for (var m = 0; m < dl.changes.universalFiltersList.length; m++) {
            var universalFilter = dl.changes.universalFiltersList
            for (var n = 0; n < dl.changes.universalFilter.length; n++) {
                if (
                    universalFilter[m].value ==
                    dl.changes.universalFilter[n].filterName
                ) {
                    for (
                        var i = 0;
                        i < dl.changes.universalFilter[n].options.length;
                        i++
                    ) {
                        dl.changes.universalFilter[n].options[i].selected ==
                            false
                    }
                }
            }
        }
    }
    dl.functions.removeUniversalFilter = removeUniversalFilter

    const visaSlotProceedToPay = async () => {
        if (dl.changes.visaQuestionSlotBookingForm.visaType.value == '') {
            dl.changes.visaQuestionSlotBookingForm.visaType.showErrorMessage =
                'flex'
            dl.changes.visaQuestionSlotBookingForm.visaType.inputBorderColor =
                'rgba(207,206,206,1)'
            return
        }

        if (!dl.changes.visaQuestionSlotBookingForm.timeSlot.value) {
            alert('Select a slot')
            return
        }

        dl.functions.modalsPlugin.openModal('paymentSelector')
    }
    dl.functions.visaSlotProceedToPay = visaSlotProceedToPay

    const paymentSelectorPopupUPI = async () => {
        var currentPath = dl.functions.common.getLastPath()
        if (currentPath == 'visaslotbooking') {
            var type = dl.changes.visaQuestionSlotBookingForm.session.value
            var slot = Number(
                dl.changes.visaQuestionSlotBookingForm.timeSlot.value
            )
            var date = dl.changes.visaQuestionSlotBookingForm.date.value
            var category = dl.changes.visaQuestionSlotBookingForm.visaType.value

            var body = {
                category: 'Visa & Immigration',
                type: type,
                slot: slot,
                date: date,
                otherDetails: {
                    visatype: category,
                    notes: dl.changes.visaQuestionSlotBookingForm.note.value,
                },
            }

            var res = await dl.functions.createBookings(body)
            dl.changes.createBookingsResponse = res
            if (res.message) {
                return
            } else {
                dl.changes.payemtforService = 'visabookings'

                dl.changes.visaQuestionSlotBookingForm.session.value = ''
                dl.changes.visaQuestionSlotBookingForm.date.value = ''
                dl.changes.visaQuestionSlotBookingForm.timeSlot.options = []
                dl.changes.visaQuestionSlotBookingForm.timeSlot.value = ''
                dl.changes.visaQuestionSlotBookingForm.visaType.value = ''
                dl.changes.visaQuestionSlotBookingForm.note.value = ''
            }
        } else if (currentPath == 'studyabroadslotpayment') {
            var otherDetails = {}
            for (let key in dl.changes.studyAbroadForm) {
                var obj = dl.changes.studyAbroadForm
                otherDetails[key] = obj[key].value
            }
            otherDetails['formType'] = dl.changes.formType
            otherDetails['notes'] = dl.changes.studyAbroadPaymentForm.note.value

            var type = dl.changes.studyAbroadPaymentForm.session.value
            var slot = Number(dl.changes.studyAbroadPaymentForm.timeSlot.value)
            var date = dl.changes.studyAbroadPaymentForm.date.value

            var body = {
                category: 'Study abroad',
                type: type,
                slot: slot,
                date: date,
                otherDetails: otherDetails,
            }

            var res = await dl.functions.createBookings(body)
            if (res.message) {
                alert('something went wrong....')
                return
            } else {
                dl.changes.createBookingsResponse = res
            }
        } else {
            var body = {
                serviceType:
                    dl.changes.promoteDetail.serviceType == 'needAride'
                        ? 'rides'
                        : dl.changes.promoteDetail.serviceType,
                serviceId: dl.changes.promoteDetail.serviceId,
                fromDate: dl.changes.promoteDetail.fromDate,
                toDate: dl.changes.promoteDetail.toDate,
            }

            var res = await dl.functions.createPromteOrder(body)
            if (res.message) {
                dl.changes.promoteErroeMsg = 'Enter Correct Dates!'
            }
            dl.changes.createBookingsResponse = res
        }

        var orderId = dl.changes.createBookingsResponse.rzpId
        var status = await dl.functions.common.payments.rzpPayment(
            'rzp_test_etvQ79Zjs7jVQL',
            orderId,
            async (val) => {
                var result = 0
                if (dl.changes.payemtforService == 'rentallistings') {
                    var sucessPaymentBody = {
                        orderId:
                            dl.changes.createBookingsResponse.otherData.orderId,
                    }
                    var result = await dl.functions.promoteOrderConfirm(
                        sucessPaymentBody
                    )
                    if (result == 200) {
                        dl.functions.modalsPlugin.closeModal('paymentSelector')
                        if (
                            dl.changes.selectedListingrentelType ==
                            'Rooms/Roommates'
                        ) {
                            if (dl.changes.selectedListingType == 'Offered') {
                                dl.functions.getRoomListing('6', 1)
                            }
                            if (dl.changes.selectedListingType == 'Wanted') {
                                dl.functions.getneedARoomListing('6', 1)
                            }
                        }

                        if (
                            dl.changes.selectedListingrentelType ==
                            'Home rentals'
                        ) {
                            if (dl.changes.selectedListingType == 'Offered') {
                                dl.functions.getHomeListing('6', 1)
                            }
                            if (dl.changes.selectedListingType == 'Wanted') {
                                dl.functions.getneedAHomeListing('6', 1)
                            }
                        }
                    }
                } else if (
                    dl.changes.payemtforService == 'travelcompanionlisting'
                ) {
                    if (
                        dl.changes.promoteDetail.serviceType ==
                        'willBeATravelCompanion'
                    ) {
                        var sucessPaymentBody = {
                            orderId:
                                dl.changes.createBookingsResponse.otherData
                                    .orderId,
                        }
                        var result = await dl.functions.promoteOrderConfirm(
                            sucessPaymentBody
                        )
                        if (result == 200) {
                            dl.functions.modalsPlugin.closeModal(
                                'paymentSelector'
                            )
                            dl.functions.getWillBeATcListing('6', '1')
                        }
                    }

                    if (
                        dl.changes.promoteDetail.serviceType ==
                        'travelCompanion'
                    ) {
                        var sucessPaymentBody = {
                            orderId:
                                dl.changes.createBookingsResponse.otherData
                                    .orderId,
                        }
                        var result = await dl.functions.promoteOrderConfirm(
                            sucessPaymentBody
                        )
                        if (result == 200) {
                            dl.functions.modalsPlugin.closeModal(
                                'paymentSelector'
                            )
                            dl.functions.getTcListing('6', '1')
                        }
                    }
                } else if (dl.changes.payemtforService == 'ridelistings') {
                    if (dl.changes.promoteDetail.serviceType == 'rides') {
                        var sucessPaymentBody = {
                            orderId:
                                dl.changes.createBookingsResponse.otherData
                                    .orderId,
                        }

                        var result = await dl.functions.promoteOrderConfirm(
                            sucessPaymentBody
                        )
                        if (result == 200) {
                            dl.functions.modalsPlugin.closeModal(
                                'paymentSelector'
                            )
                            dl.functions.getRideListing('offered', '6', '1')
                        }
                    }
                    if (dl.changes.promoteDetail.serviceType == 'needAride') {
                        var sucessPaymentBody = {
                            orderId:
                                dl.changes.createBookingsResponse.otherData
                                    .orderId,
                        }
                        var result = await dl.functions.promoteOrderConfirm(
                            sucessPaymentBody
                        )
                        if (result == 200) {
                            dl.functions.modalsPlugin.closeModal(
                                'paymentSelector'
                            )
                            dl.functions.getRideListing('wanted', '6', '1')
                        }
                    }
                } else {
                    var bookingId = dl.changes.createBookingsResponse._id
                    var sucessPaymentBody = {
                        bookingId: bookingId,
                        paymentStatus: 'success',
                    }
                    var result = await dl.functions.bookingPaymentSucess(
                        sucessPaymentBody
                    )
                    if (result == 200) {
                        dl.functions.modalsPlugin.closeModal('paymentSelector')
                        dl.functions.viewsPlugin.showView(
                            dl.changes.payemtforService
                        )
                        var currentPath = dl.functions.common.getLastPath()
                        dl.functions.onLoadFunctions[currentPath]()
                    }
                }
                dl.changes.promoteDetail.fromDate = ''
                dl.changes.promoteDetail.toDate = ''
                dl.changes.promoteErroeMsg = ''
            }
        )
    }
    dl.functions.paymentSelectorPopupUPI = paymentSelectorPopupUPI

    const paymentSelectorPopupCard = async () => {
        var currentPath = dl.functions.common.getLastPath()
        if (currentPath == 'visaslotbooking') {
            var type = dl.changes.visaQuestionSlotBookingForm.session.value
            var slot = Number(
                dl.changes.visaQuestionSlotBookingForm.timeSlot.value
            )
            var date = dl.changes.visaQuestionSlotBookingForm.date.value
            var category = dl.changes.visaQuestionSlotBookingForm.visaType.value

            var body = {
                category: 'Visa & Immigration',
                type: type,
                slot: slot,
                date: date,
                otherDetails: {
                    visatype: category,
                    notes: dl.changes.visaQuestionSlotBookingForm.note.value,
                },
                paymentPlatform: 'stripe',
            }

            var res = await dl.functions.createBookings(body)
            dl.changes.createBookingsResponse = res
            if (res.message) {
                return
            } else {
                dl.changes.payemtforService = 'visabookings'

                dl.changes.visaQuestionSlotBookingForm.session.value = ''
                dl.changes.visaQuestionSlotBookingForm.date.value = ''
                dl.changes.visaQuestionSlotBookingForm.timeSlot.options = []
                dl.changes.visaQuestionSlotBookingForm.timeSlot.value = ''
                dl.changes.visaQuestionSlotBookingForm.visaType.value = ''
                dl.changes.visaQuestionSlotBookingForm.note.value = ''
            }
        } else if (currentPath == 'studyabroadslotpayment') {
            var otherDetails = {}
            for (let key in dl.changes.studyAbroadForm) {
                var obj = dl.changes.studyAbroadForm
                otherDetails[key] = obj[key].value
            }
            otherDetails['formType'] = dl.changes.formType
            otherDetails['notes'] = dl.changes.studyAbroadPaymentForm.note.value

            var type = dl.changes.studyAbroadPaymentForm.session.value
            var slot = Number(dl.changes.studyAbroadPaymentForm.timeSlot.value)
            var date = dl.changes.studyAbroadPaymentForm.date.value

            var body = {
                category: 'Study abroad',
                type: type,
                slot: slot,
                date: date,
                otherDetails: otherDetails,
                paymentPlatform: 'stripe',
            }

            var res = await dl.functions.createBookings(body)
            if (res.message) {
                alert('something went wrong....')
                return
            } else {
                dl.changes.createBookingsResponse = res
            }
        } else {
            var body = {
                serviceType: dl.changes.promoteDetail.serviceType,
                serviceId: dl.changes.promoteDetail.serviceId,
                fromDate: dl.changes.promoteDetail.fromDate,
                toDate: dl.changes.promoteDetail.toDate,
                paymentPlatform: 'stripe',
            }

            var res = await dl.functions.createPromteOrder(body)
            if (res.message) {
                dl.changes.promoteErroeMsg = 'Enter Correct Dates!'
            }
            dl.changes.createBookingsResponse = res
        }

        var stripeId = dl.changes.createBookingsResponse.stripeId
        var response = dl.functions.openStripe(stripeId, async (res) => {
            if (res.status == 'success') {
                var result = 0
                if (dl.changes.payemtforService == 'rentallistings') {
                    var sucessPaymentBody = {
                        orderId:
                            dl.changes.createBookingsResponse.otherData.orderId,
                    }
                    var result = await dl.functions.promoteOrderConfirm(
                        sucessPaymentBody
                    )
                    if (result == 200) {
                        dl.functions.modalsPlugin.closeModal('paymentSelector')
                        if (
                            dl.changes.selectedListingrentelType ==
                            'Rooms/Roommates'
                        ) {
                            if (dl.changes.selectedListingType == 'Offered') {
                                dl.functions.getRoomListing('6', 1)
                            }
                            if (dl.changes.selectedListingType == 'Wanted') {
                                dl.functions.getneedARoomListing('6', 1)
                            }
                        }

                        if (
                            dl.changes.selectedListingrentelType ==
                            'Home rentals'
                        ) {
                            if (dl.changes.selectedListingType == 'Offered') {
                                dl.functions.getHomeListing('6', 1)
                            }
                            if (dl.changes.selectedListingType == 'Wanted') {
                                dl.functions.getneedAHomeListing('6', 1)
                            }
                        }
                    }
                } else if (
                    dl.changes.payemtforService == 'travelcompanionlisting'
                ) {
                    if (
                        dl.changes.promoteDetail.serviceType ==
                        'willBeATravelCompanion'
                    ) {
                        var sucessPaymentBody = {
                            orderId:
                                dl.changes.createBookingsResponse.otherData
                                    .orderId,
                        }
                        var result = await dl.functions.promoteOrderConfirm(
                            sucessPaymentBody
                        )
                        if (result == 200) {
                            dl.functions.modalsPlugin.closeModal(
                                'paymentSelector'
                            )
                            dl.functions.getWillBeATcListing('6', '1')
                        }
                    }

                    if (
                        dl.changes.promoteDetail.serviceType ==
                        'travelCompanion'
                    ) {
                        var sucessPaymentBody = {
                            orderId:
                                dl.changes.createBookingsResponse.otherData
                                    .orderId,
                        }
                        var result = await dl.functions.promoteOrderConfirm(
                            sucessPaymentBody
                        )
                        if (result == 200) {
                            dl.functions.modalsPlugin.closeModal(
                                'paymentSelector'
                            )
                            dl.functions.getTcListing('6', '1')
                        }
                    }
                } else if (dl.changes.payemtforService == 'ridelistings') {
                    if (dl.changes.promoteDetail.serviceType == 'rides') {
                        var sucessPaymentBody = {
                            orderId:
                                dl.changes.createBookingsResponse.otherData
                                    .orderId,
                        }

                        var result = await dl.functions.promoteOrderConfirm(
                            sucessPaymentBody
                        )
                        if (result == 200) {
                            dl.functions.modalsPlugin.closeModal(
                                'paymentSelector'
                            )
                            dl.functions.getRideListing('offered', '6', '1')
                        }
                    }
                    if (dl.changes.promoteDetail.serviceType == 'needAride') {
                        var sucessPaymentBody = {
                            orderId:
                                dl.changes.createBookingsResponse.otherData
                                    .orderId,
                        }
                        var result = await dl.functions.promoteOrderConfirm(
                            sucessPaymentBody
                        )
                        if (result == 200) {
                            dl.functions.modalsPlugin.closeModal(
                                'paymentSelector'
                            )
                            dl.functions.getRideListing('wanted', '6', '1')
                        }
                    }
                } else {
                    var bookingId = dl.changes.createBookingsResponse._id
                    var sucessPaymentBody = {
                        bookingId: bookingId,
                        paymentStatus: 'success',
                    }
                    var result = await dl.functions.bookingPaymentSucess(
                        sucessPaymentBody
                    )
                    if (result == 200) {
                        dl.functions.modalsPlugin.closeModal('paymentSelector')
                        dl.functions.viewsPlugin.showView(
                            dl.changes.payemtforService
                        )
                        var currentPath = dl.functions.common.getLastPath()
                        dl.functions.onLoadFunctions[currentPath]()
                    }
                }
            } else {
                alert('something went wrong......')
            }
        })
    }
    dl.functions.paymentSelectorPopupCard = paymentSelectorPopupCard

    const contactUsAction = (id, serviceType, size) => {
        var userToken = dl.functions.common.getCookie('userToken')
        var contactModal = 'contactAdvertiserLg'
        var logInModal = 'loginLg'
        if (size == 'small') {
            contactModal = 'contactAdvertiserS'
            logInModal = 'loginS'
        }
        if (userToken) {
            dl.changes.contactUSForm.serviceType = serviceType
            dl.changes.contactUSForm.serviceId = id
            dl.changes.contactUSForm.firstname = dl.changes.userDetail.firstName
            dl.changes.contactUSForm.lastname = dl.changes.userDetail.lastName
            dl.changes.contactUSForm.email = dl.changes.userDetail.email
            if (dl.changes.userDetail.phone.length > 12) {
                dl.changes.contactUSForm.countryCode = '+91'
                dl.changes.contactUSForm.phone =
                    dl.changes.userDetail.phone.substring(3)
            } else {
                dl.changes.contactUSForm.countryCode = '+1'
                dl.changes.contactUSForm.phone =
                    dl.changes.userDetail.phone.substring(2)
            }
            dl.functions.modalsPlugin.openModal(contactModal)
        } else {
            dl.functions.modalsPlugin.openModal(logInModal)
        }
    }
    dl.functions.contactUsAction = contactUsAction

    const submitNeedARide = async () => {
        let timeStr = dl.changes.needARideForm.time.value
        let timeOptions = dl.changes.needARideForm.time.options
        let timeIndex = timeOptions.indexOf(timeStr)
        let timeNum = 6 + timeIndex

        var body = {
            to: dl.changes.needARideForm.to.value,
            from: dl.changes.needARideForm.from.value,
            price: dl.changes.needARideForm.price.value,
            dateOfJourney: dl.changes.needARideForm.date.value,
            adType: 'wanted',
            spotAvailable: dl.changes.needARideForm.noOfPeople.value,
            time: dl.changes.needARideForm.time.value,
            timeNum: timeNum,
            contactNumber:
                dl.changes.needARideForm.phone.selectPlaceHolder +
                dl.changes.needARideForm.phone.value,
            email: dl.changes.needARideForm.email.value,
        }

        if (body.dateOfJourney == '') {
            dl.changes.needARideForm.date.inputBorderColor =
                'rgba(248,246,246,1)'
            dl.changes.needARideForm.date.showErrorMessage = 'flex'
            return
        }

        if (body.time == '') {
            dl.changes.needARideForm.time.inputBorderColor =
                'rgba(248,246,246,1)'
            dl.changes.needARideForm.time.showErrorMessage = 'flex'
            return
        }

        if (body.from.length < 5) {
            dl.changes.needARideForm.from.inputBorderColor =
                'rgba(248,246,246,1)'
            dl.changes.needARideForm.from.showErrorMessage = 'flex'
            return
        }

        if (body.to.length < 5) {
            dl.changes.needARideForm.to.inputBorderColor = 'rgba(248,246,246,1)'
            dl.changes.needARideForm.to.showErrorMessage = 'flex'
            return
        }

        if (body.spotAvailable == '') {
            dl.changes.needARideForm.noOfPeople.inputBorderColor =
                'rgba(248,246,246,1)'
            dl.changes.needARideForm.noOfPeople.showErrorMessage = 'flex'
            return
        }

        if (body.price == '') {
            dl.changes.needARideForm.price.inputBorderColor =
                'rgba(248,246,246,1)'
            dl.changes.needARideForm.price.showErrorMessage = 'flex'
            return
        }

        if (body.contactNumber.length < 12 || body.contactNumber.length > 13) {
            dl.changes.needARideForm.phone.inputBorderColor =
                'rgba(248,246,246,1)'
            dl.changes.needARideForm.phone.showErrorMessage = 'flex'
            return
        }

        if (body.email.length < 10) {
            dl.changes.needARideForm.email.inputBorderColor =
                'rgba(248,246,246,1)'
            dl.changes.needARideForm.email.showErrorMessage = 'flex'
            return
        }

        var params = dl.functions.common.getParams()
        var rideId = params.rideId
        var mode = params.mode

        if (rideId) {
            if (mode == 'edit') {
                body['id'] = rideId
                var res = await dl.functions.updateRide(body)
                if (res == 200) {
                    dl.functions.getRideListing('wanted', '6', '1')
                    dl.functions.viewsPlugin.showView('ridelistings')
                }
            }
        } else {
            var res = await dl.functions.createNeedARide(body)
            dl.functions.viewsPlugin.showView('ihavearide')
            var currentPath = dl.functions.common.getLastPath()
            dl.functions.onLoadFunctions[currentPath]()
            if (res == 200) {
                dl.changes.needARideForm = {
                    date: {
                        fieldName: 'Date',
                        showErrorMessage: 'none',
                        errorMessage: 'Required Field',
                        showStar: 'flex',
                        inputBorderColor: 'rgba(207,206,206,1)',
                        value: '',
                    },
                    time: {
                        fieldName: 'Time',
                        showErrorMessage: 'none',
                        errorMessage: 'Required Field',
                        showStar: 'flex',
                        inputBorderColor: 'rgba(207,206,206,1)',
                        options: [
                            '6AM - 7AM',
                            '7AM - 8AM',
                            '8AM - 9AM',
                            '9AM - 10AM',
                            '10AM - 11AM',
                            '11AM - 12PM',
                            '12PM - 1PM',
                            '1PM - 2PM',
                            '2PM - 3PM',
                            '3PM - 4PM',
                            '4PM - 5PM',
                            '5PM - 6PM',
                            '6PM - 7PM',
                            '7PM - 8PM',
                            '8PM - 9PM',
                            '9PM - 10PM',
                            '10PM - 11PM',
                        ],
                        value: '',
                    },
                    from: {
                        fieldName: 'From',
                        showErrorMessage: 'none',
                        errorMessage: 'Required Field',
                        showStar: 'flex',
                        inputBorderColor: 'rgba(207,206,206,1)',
                        options: [],
                        value: '',
                    },
                    to: {
                        fieldName: 'To',
                        showErrorMessage: 'none',
                        errorMessage: 'Required Field',
                        showStar: 'flex',
                        inputBorderColor: 'rgba(207,206,206,1)',
                        options: [],
                        value: '',
                    },
                    noOfPeople: {
                        fieldName: 'No. of people',
                        showErrorMessage: 'none',
                        errorMessage: 'Required Field',
                        showStar: 'flex',
                        inputBorderColor: 'rgba(207,206,206,1)',
                        options: [1, 2, 3, 4, 5],
                        value: '',
                    },
                    price: {
                        fieldName: 'Expected fare',
                        showErrorMessage: 'none',
                        errorMessage: 'Required Field',
                        showStar: 'flex',
                        inputBorderColor: 'rgba(207,206,206,1)',
                        value: '',
                    },
                    phone: {
                        fieldName: 'Contact Number',
                        showErrorMessage: 'none',
                        errorMessage: 'Required Field',
                        showStar: 'flex',
                        inputBorderColor: 'rgba(207,206,206,1)',
                        countryCodes: ['+1', '+91'],
                        selectPlaceHolder: '+91',
                        value: '',
                    },
                    email: {
                        fieldName: 'Email',
                        showErrorMessage: 'none',
                        errorMessage: 'Required Field',
                        showStar: 'flex',
                        inputBorderColor: 'rgba(207,206,206,1)',
                        value: '',
                    },
                }
            }
        }
    }
    dl.functions.submitNeedARide = submitNeedARide

    const submitListMyRide = async () => {
        let timeStr = dl.changes.listMyRideForm.time.value
        let timeOptions = dl.changes.listMyRideForm.time.options
        let timeIndex = timeOptions.indexOf(timeStr)
        let timeNum = 6 + timeIndex

        var body = {
            to: dl.changes.listMyRideForm.to.value,
            from: dl.changes.listMyRideForm.from.value,
            price: dl.changes.listMyRideForm.price.value,
            dateOfJourney: dl.changes.listMyRideForm.date.value,
            adType: 'offered',
            spotAvailable: dl.changes.listMyRideForm.noOfPeople.value,
            time: dl.changes.listMyRideForm.time.value,
            timeNum: timeNum,
            contactNumber:
                dl.changes.listMyRideForm.phone.selectPlaceHolder +
                dl.changes.listMyRideForm.phone.value,
            email: dl.changes.listMyRideForm.email.value,
        }

        if (body.dateOfJourney == '') {
            dl.changes.listMyRideForm.date.inputBorderColor =
                'rgba(248,246,246,1)'
            dl.changes.listMyRideForm.date.showErrorMessage = 'flex'
            return
        }

        if (body.time == '') {
            dl.changes.listMyRideForm.time.inputBorderColor =
                'rgba(248,246,246,1)'
            dl.changes.listMyRideForm.time.showErrorMessage = 'flex'
            return
        }

        if (body.from.length < 5) {
            dl.changes.listMyRideForm.from.inputBorderColor =
                'rgba(248,246,246,1)'
            dl.changes.listMyRideForm.from.showErrorMessage = 'flex'
            return
        }

        if (body.to.length < 5) {
            dl.changes.listMyRideForm.to.inputBorderColor =
                'rgba(248,246,246,1)'
            dl.changes.listMyRideForm.to.showErrorMessage = 'flex'
            return
        }

        if (body.spotAvailable == '') {
            dl.changes.listMyRideForm.noOfPeople.inputBorderColor =
                'rgba(248,246,246,1)'
            dl.changes.listMyRideForm.noOfPeople.showErrorMessage = 'flex'
            return
        }

        if (body.price == '') {
            dl.changes.listMyRideForm.price.inputBorderColor =
                'rgba(248,246,246,1)'
            dl.changes.listMyRideForm.price.showErrorMessage = 'flex'
            return
        }

        if (body.contactNumber.length < 12 || body.contactNumber.length > 13) {
            dl.changes.listMyRideForm.phone.inputBorderColor =
                'rgba(248,246,246,1)'
            dl.changes.listMyRideForm.phone.showErrorMessage = 'flex'
            return
        }

        if (body.email.length < 10) {
            dl.changes.listMyRideForm.email.inputBorderColor =
                'rgba(248,246,246,1)'
            dl.changes.listMyRideForm.email.showErrorMessage = 'flex'
            return
        }

        var params = dl.functions.common.getParams()
        var rideId = params.rideId
        var mode = params.mode

        if (rideId) {
            if (mode == 'edit') {
                body['id'] = rideId
                var res = await dl.functions.updateRide(body)
                if (res == 200) {
                    dl.functions.getRideListing('offered', '6', '1')
                    dl.functions.viewsPlugin.showView('ridelistings')
                }
            }
        } else {
            var res = await dl.functions.createListMyRide(body)
            if (res == 200) {
                dl.changes.listMyRideForm = {
                    date: {
                        fieldName: 'Date',
                        showErrorMessage: 'none',
                        errorMessage: 'Required Field',
                        showStar: 'flex',
                        inputBorderColor: 'rgba(207,206,206,1)',
                        value: '',
                    },
                    time: {
                        fieldName: 'Time',
                        showErrorMessage: 'none',
                        errorMessage: 'Required Field',
                        showStar: 'flex',
                        inputBorderColor: 'rgba(207,206,206,1)',
                        options: [
                            '6AM - 7AM',
                            '7AM - 8AM',
                            '8AM - 9AM',
                            '9AM - 10AM',
                            '10AM - 11AM',
                            '11AM - 12PM',
                            '12PM - 1PM',
                            '1PM - 2PM',
                            '2PM - 3PM',
                            '3PM - 4PM',
                            '4PM - 5PM',
                            '5PM - 6PM',
                            '6PM - 7PM',
                            '7PM - 8PM',
                            '8PM - 9PM',
                            '9PM - 10PM',
                            '10PM - 11PM',
                        ],
                        value: '',
                    },
                    from: {
                        fieldName: 'From',
                        showErrorMessage: 'none',
                        errorMessage: 'Required Field',
                        showStar: 'flex',
                        inputBorderColor: 'rgba(207,206,206,1)',
                        options: ['00601', '00602', '00603', '00606'],
                        value: '',
                    },
                    to: {
                        fieldName: 'To',
                        showErrorMessage: 'none',
                        errorMessage: 'Required Field',
                        showStar: 'flex',
                        inputBorderColor: 'rgba(207,206,206,1)',
                        options: ['00601', '00602', '00603', '00606'],
                        value: '',
                    },
                    noOfPeople: {
                        fieldName: 'Spot available',
                        showErrorMessage: 'none',
                        errorMessage: 'Required Field',
                        showStar: 'flex',
                        inputBorderColor: 'rgba(207,206,206,1)',
                        options: [1, 2, 3, 4, 5],
                        value: '',
                    },
                    price: {
                        fieldName: 'Expected fare',
                        showErrorMessage: 'none',
                        errorMessage: 'Required Field',
                        showStar: 'flex',
                        inputBorderColor: 'rgba(207,206,206,1)',
                        value: '',
                    },
                    phone: {
                        fieldName: 'Contact Number',
                        showErrorMessage: 'none',
                        errorMessage: 'Required Field',
                        showStar: 'flex',
                        inputBorderColor: 'rgba(207,206,206,1)',
                        countryCodes: ['+1', '+91'],
                        selectPlaceHolder: '+91',
                        value: '',
                    },
                    email: {
                        fieldName: 'Email',
                        showErrorMessage: 'none',
                        errorMessage: 'Required Field',
                        showStar: 'flex',
                        inputBorderColor: 'rgba(207,206,206,1)',
                        value: '',
                    },
                }
            }
        }
    }
    dl.functions.submitListMyRide = submitListMyRide

    const onReport = async (id, reportType, size) => {
        var reportPopup = 'reportacommentLg'
        var loginPopup = 'loginLg'
        if (size == 'small') {
            reportPopup = 'reportacommentS'
            loginPopup = 'loginS'
        }

        var userToken = dl.functions.common.getCookie('userToken')
        if (userToken) {
            dl.changes.reportForm.reportType = reportType
            dl.changes.reportForm.reportedId = id
            dl.changes.reportForm.firstName = dl.changes.userDetail.firstName
            dl.changes.reportForm.lastName = dl.changes.userDetail.lastName
            dl.changes.reportForm.email = dl.changes.userDetail.email
            if (dl.changes.userDetail.phone.length > 12) {
                dl.changes.reportForm.countryCode = '+91'
                dl.changes.reportForm.phone =
                    dl.changes.userDetail.phone.substring(3)
            } else {
                dl.changes.reportForm.countryCode = '+1'
                dl.changes.reportForm.phone =
                    dl.changes.userDetail.phone.substring(2)
            }

            dl.functions.modalsPlugin.openModal(reportPopup)
        } else {
            dl.functions.modalsPlugin.openModal(loginPopup)
        }
    }
    dl.functions.onReport = onReport

    const getBlogCategory = async () => {
        var myHeaders = new Headers()
        // var userToken = dl.functions.common.getCookie('userToken')
        // myHeaders.append('Authorization', userToken)

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow',
        }

        try {
            dl.functions.modalsPlugin.openModal('loading')
            // var baseUrl = process.env.BASE_URL
            var baseUrl = 'https://cms.digitalmocktails.com'
            const response = await fetch(
                // 'https://melody-mocktail-6tjz.api.neutrodev.com/user/blogCategory',
                `${baseUrl}/api/categories`,
                requestOptions
            )
            const res = await response.json()
            var categories = res.data
            dl.functions.modalsPlugin.closeModal('loading')

            var result = []
            for (var i = 0; i < categories.length; i++) {
                var obj = {
                    name: categories[i].attributes.Title,
                    selected: false,
                }
                result.push(obj)
            }
            dl.changes.blogsFilter[0].options = result
        } catch (err) {
            return err
        }
    }
    dl.functions.getBlogCategory = getBlogCategory

    const getBlogSubcategory = async () => {
        var myHeaders = new Headers()
        // var userToken = dl.functions.common.getCookie('userToken')
        // myHeaders.append('Authorization', userToken)

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow',
        }

        try {
            dl.functions.modalsPlugin.openModal('loading')
            // console.log(category)
            var category = dl.changes.blogsFilter[0].options
            var filter = ''
            var count = 0
            for (var i = 0; i < category.length; i++) {
                if (category[i].selected) {
                    filter =
                        filter +
                        `&filters[$or][${count}][category][Title][$eq]=${category[i].name}`
                    count = count + 1
                }
            }

            if (filter.length < 1) {
                dl.changes.blogsFilter[1].options = []
                return
            }

            // var category = filters.Categories ? filters.Categories : ''

            // var baseUrl = process.env.BASE_URL
            var baseUrl = 'https://cms.digitalmocktails.com'
            const response = await fetch(
                // 'https://melody-mocktail-6tjz.api.neutrodev.com/user/blogCategory',
                `${baseUrl}/api/sub-categories?populate=*${filter}`,
                requestOptions
            )
            const res = await response.json()
            var subcategories = res.data
            dl.functions.modalsPlugin.closeModal('loading')

            if (subcategories.length < 1) {
                dl.changes.blogsFilter[1].options = []
                console.log('no subcategory')
                return
            }

            var result = []
            for (var i = 0; i < subcategories.length; i++) {
                var obj = {
                    name: subcategories[i].attributes.Subcategory,
                    selected: false,
                }
                result.push(obj)
            }
            dl.changes.blogsFilter[1].options = result
        } catch (err) {
            return err
        }
    }
    dl.functions.getBlogSubcategory = getBlogSubcategory

    const homeMainAddindicator = () => {
        var containerIds = [
            '#t18_2086_1374',
            '#t18_2082_1308',
            '#t18_2079_1252',
        ]
        var homemain1 = ['t18_2086_1371', 't18_2086_1372', 't18_2086_1373']
        var homemain2 = ['t18_2082_1310', 't18_2082_1311', 't18_2082_1312']
        var homemain3 = ['t18_2079_1248', 't18_2079_1249', 't18_2079_1250']
        for (var i = 0; i < containerIds.length; i++) {
            var homeMainAdd = homemain1
            if (i == 0) {
                homeMainAdd = homemain1
            } else if (i == 1) {
                homeMainAdd = homemain2
            } else if (i == 2) {
                homeMainAdd = homemain3
            }

            let options = {
                root: document.querySelector(containerIds[i]),
                rootMargin: '0px',
                threshold: 0.8,
            }

            let observer1 = new IntersectionObserver((e) => {
                dl.changes.homemain1 = 'rgba(186,15,23,1.00)'
                dl.changes.homemain2 = 'rgba(149,152,153,1.00)'
                dl.changes.homemain3 = 'rgba(149,152,153,1.00)'
            }, options)

            let observer2 = new IntersectionObserver((e) => {
                dl.changes.homemain1 = 'rgba(149,152,153,1.00)'
                dl.changes.homemain2 = 'rgba(186,15,23,1.00)'
                dl.changes.homemain3 = 'rgba(149,152,153,1.00)'
            }, options)

            let observer3 = new IntersectionObserver((e) => {
                dl.changes.homemain1 = 'rgba(149,152,153,1.00)'
                dl.changes.homemain2 = 'rgba(149,152,153,1.00)'
                dl.changes.homemain3 = 'rgba(186,15,23,1.00)'
            }, options)

            for (var j = 0; j < homeMainAdd.length; j++) {
                if (
                    homeMainAdd[j] == 't18_2086_1371' ||
                    't18_2082_1310' ||
                    't18_2079_1248'
                ) {
                    var target = document.querySelector('#' + homeMainAdd[j])
                    observer1.observe(target)
                }

                if (
                    homeMainAdd[j] == 't18_2086_1372' ||
                    't18_2082_1311' ||
                    't18_2079_1249'
                ) {
                    var target = document.querySelector('#' + homeMainAdd[j])
                    observer2.observe(target)
                }

                if (
                    homeMainAdd[j] == 't18_2086_1373' ||
                    't18_2082_1312' ||
                    't18_2079_1250'
                ) {
                    var target = document.querySelector('#' + homeMainAdd[j])
                    observer3.observe(target)
                }
            }
        }
    }
    dl.functions.homeMainAddindicator = homeMainAddindicator

    const homeSecoundryAddindicator = () => {
        var containerIds = [
            '#t18_2086_1392',
            '#t18_2082_1303',
            '#t18_2082_1283',
        ]
        var homesecoundry1 = ['t18_2086_1394', 't18_2086_1395', 't18_2086_1396']
        var homesecoundry2 = ['t18_2082_1296', 't18_2082_1297', 't18_2082_1298']
        var homesecoundry3 = ['t18_2082_1285', 't18_2082_1286', 't18_2082_1287']
        for (var i = 0; i < containerIds.length; i++) {
            var homesecoundryAdd = homesecoundry1
            if (i == 0) {
                homesecoundryAdd = homesecoundry1
            } else if (i == 1) {
                homesecoundryAdd = homesecoundry2
            } else if (i == 2) {
                homesecoundryAdd = homesecoundry3
            }

            let options = {
                root: document.querySelector(containerIds[i]),
                rootMargin: '0px',
                threshold: 0.8,
            }

            let observer1 = new IntersectionObserver((e) => {
                dl.changes.homesecoundry1 = 'rgba(186,15,23,1.00)'
                dl.changes.homesecoundry2 = 'rgba(149,152,153,1.00)'
                dl.changes.homesecoundry3 = 'rgba(149,152,153,1.00)'
            }, options)

            let observer2 = new IntersectionObserver((e) => {
                dl.changes.homesecoundry1 = 'rgba(149,152,153,1.00)'
                dl.changes.homesecoundry2 = 'rgba(186,15,23,1.00)'
                dl.changes.homesecoundry3 = 'rgba(149,152,153,1.00)'
            }, options)

            let observer3 = new IntersectionObserver((e) => {
                dl.changes.homesecoundry1 = 'rgba(149,152,153,1.00)'
                dl.changes.homesecoundry2 = 'rgba(149,152,153,1.00)'
                dl.changes.homesecoundry3 = 'rgba(186,15,23,1.00)'
            }, options)

            for (var j = 0; j < homesecoundryAdd.length; j++) {
                if (
                    homesecoundryAdd[j] == 't18_2086_1394' ||
                    't18_2082_1296' ||
                    't18_2082_1285'
                ) {
                    var target = document.querySelector(
                        '#' + homesecoundryAdd[j]
                    )
                    observer1.observe(target)
                }

                if (
                    homesecoundryAdd[j] == 't18_2086_1395' ||
                    't18_2082_1297' ||
                    't18_2082_1286'
                ) {
                    var target = document.querySelector(
                        '#' + homesecoundryAdd[j]
                    )
                    observer2.observe(target)
                }

                if (
                    homesecoundryAdd[j] == 't18_2086_1396' ||
                    't18_2082_1298' ||
                    't18_2082_1287'
                ) {
                    var target = document.querySelector(
                        '#' + homesecoundryAdd[j]
                    )
                    observer3.observe(target)
                }
            }
        }
    }
    dl.functions.homeSecoundryAddindicator = homeSecoundryAddindicator

    const homeOnLoad = () => {
        // if(!dl.changes.webinarPopupClosed){
        //     dl.functions.modalsPlugin.openModal('WebinarAdBannerPopup')
        // }

        dl.functions.checkUser()
        dl.functions.getUserDetail()
        dl.functions.getHomeBlog()
        dl.functions.getLatestRental()
        dl.functions.latestWantToBeTc(5, 1)
        console.log(dl.changes.latestHomeRental)
        let options = {
            root: document.querySelector('#t18_2086_1374'),
            rootMargin: '0px',
            threshold: 0.8,
        }

        var homeMainAdd = ['t18_2086_1371', 't18_2086_1372', 't18_2086_1373']

        let observer1 = new IntersectionObserver((e) => {
            dl.changes.homemain1 = 'rgba(186,15,23,1.00)'
            dl.changes.homemain2 = 'rgba(149,152,153,1.00)'
            dl.changes.homemain3 = 'rgba(149,152,153,1.00)'
        }, options)

        let observer2 = new IntersectionObserver((e) => {
            // alert(dl.changes.homemain2)
            dl.changes.homemain1 = 'rgba(149,152,153,1.00)'
            dl.changes.homemain2 = 'rgba(186,15,23,1.00)'
            dl.changes.homemain3 = 'rgba(149,152,153,1.00)'
        }, options)

        let observer3 = new IntersectionObserver((e) => {
            dl.changes.homemain1 = 'rgba(149,152,153,1.00)'
            dl.changes.homemain2 = 'rgba(149,152,153,1.00)'
            dl.changes.homemain3 = 'rgba(186,15,23,1.00)'
        }, options)

        for (var j = 0; j < homeMainAdd.length; j++) {
            if (homeMainAdd[j] == 't18_2086_1371') {
                var target = document.querySelector('#' + homeMainAdd[j])
                observer1.observe(target)
            }

            if (homeMainAdd[j] == 't18_2086_1372') {
                var target = document.querySelector('#' + homeMainAdd[j])
                observer2.observe(target)
            }

            if (homeMainAdd[j] == 't18_2086_1373') {
                var target = document.querySelector('#' + homeMainAdd[j])
                observer3.observe(target)
            }
        }

        options = {
            root: document.querySelector('#t18_2082_1308'),
            rootMargin: '0px',
            threshold: 0.8,
        }

        let observer1s = new IntersectionObserver((e) => {
            dl.changes.homemain1 = 'rgba(186,15,23,1.00)'
            dl.changes.homemain2 = 'rgba(149,152,153,1.00)'
            dl.changes.homemain3 = 'rgba(149,152,153,1.00)'
        }, options)

        let observer2s = new IntersectionObserver((e) => {
            dl.changes.homemain1 = 'rgba(149,152,153,1.00)'
            dl.changes.homemain2 = 'rgba(186,15,23,1.00)'
            dl.changes.homemain3 = 'rgba(149,152,153,1.00)'
        }, options)

        let observer3s = new IntersectionObserver((e) => {
            dl.changes.homemain1 = 'rgba(149,152,153,1.00)'
            dl.changes.homemain2 = 'rgba(149,152,153,1.00)'
            dl.changes.homemain3 = 'rgba(186,15,23,1.00)'
        }, options)

        let target1 = document.querySelector('#t18_2082_1310')
        observer1s.observe(target1)

        target1 = document.querySelector('#t18_2082_1311')
        observer2s.observe(target1)

        target1 = document.querySelector('#t18_2082_1312')
        observer3s.observe(target1)

        options = {
            root: document.querySelector('#t18_2079_1252'),
            rootMargin: '0px',
            threshold: 0.8,
        }

        let observer1xs = new IntersectionObserver((e) => {
            dl.changes.homemain1 = 'rgba(186,15,23,1.00)'
            dl.changes.homemain2 = 'rgba(149,152,153,1.00)'
            dl.changes.homemain3 = 'rgba(149,152,153,1.00)'
        }, options)

        let observer2xs = new IntersectionObserver((e) => {
            dl.changes.homemain1 = 'rgba(149,152,153,1.00)'
            dl.changes.homemain2 = 'rgba(186,15,23,1.00)'
            dl.changes.homemain3 = 'rgba(149,152,153,1.00)'
        }, options)

        let observer3xs = new IntersectionObserver((e) => {
            dl.changes.homemain1 = 'rgba(149,152,153,1.00)'
            dl.changes.homemain2 = 'rgba(149,152,153,1.00)'
            dl.changes.homemain3 = 'rgba(186,15,23,1.00)'
        }, options)

        let target2 = document.querySelector('#t18_2079_1248')
        observer1xs.observe(target2)
        target2 = document.querySelector('#t18_2079_1250')
        observer2xs.observe(target2)
        target2 = document.querySelector('#t18_2079_1249')
        observer3xs.observe(target2)

        /////////////// secoundry add ////////////////////////////////////////
        options = {
            root: document.querySelector('#t18_2086_1392'),
            rootMargin: '0px',
            threshold: 0.8,
        }

        let secoundryobserver1 = new IntersectionObserver((e) => {
            dl.changes.homesecoundry1 = 'rgba(186,15,23,1.00)'
            dl.changes.homesecoundry2 = 'rgba(149,152,153,1.00)'
            dl.changes.homesecoundry3 = 'rgba(149,152,153,1.00)'
        }, options)

        let secoundryobserver2 = new IntersectionObserver((e) => {
            dl.changes.homesecoundry1 = 'rgba(149,152,153,1.00)'
            dl.changes.homesecoundry2 = 'rgba(186,15,23,1.00)'
            dl.changes.homesecoundry3 = 'rgba(149,152,153,1.00)'
        }, options)

        let secoundryobserver3 = new IntersectionObserver((e) => {
            dl.changes.homesecoundry1 = 'rgba(149,152,153,1.00)'
            dl.changes.homesecoundry2 = 'rgba(149,152,153,1.00)'
            dl.changes.homesecoundry3 = 'rgba(186,15,23,1.00)'
        }, options)

        let target3 = document.querySelector('#t18_2086_1394')
        secoundryobserver1.observe(target3)

        target3 = document.querySelector('#t18_2086_1395')
        secoundryobserver2.observe(target3)

        target3 = document.querySelector('#t18_2086_1396')
        secoundryobserver3.observe(target3)

        //////////////////////////
        options = {
            root: document.querySelector('#t18_2082_1303'),
            rootMargin: '0px',
            threshold: 0.8,
        }

        let secoundryobserver1s = new IntersectionObserver((e) => {
            dl.changes.homesecoundry1 = 'rgba(186,15,23,1.00)'
            dl.changes.homesecoundry2 = 'rgba(149,152,153,1.00)'
            dl.changes.homesecoundry3 = 'rgba(149,152,153,1.00)'
        }, options)

        let secoundryobserver2s = new IntersectionObserver((e) => {
            dl.changes.homesecoundry1 = 'rgba(149,152,153,1.00)'
            dl.changes.homesecoundry2 = 'rgba(186,15,23,1.00)'
            dl.changes.homesecoundry3 = 'rgba(149,152,153,1.00)'
        }, options)

        let secoundryobserver3s = new IntersectionObserver((e) => {
            dl.changes.homesecoundry1 = 'rgba(149,152,153,1.00)'
            dl.changes.homesecoundry2 = 'rgba(149,152,153,1.00)'
            dl.changes.homesecoundry3 = 'rgba(186,15,23,1.00)'
        }, options)

        let target4 = document.querySelector('#t18_2082_1296')
        secoundryobserver1s.observe(target4)

        target4 = document.querySelector('#t18_2082_1297')
        secoundryobserver2s.observe(target4)

        target4 = document.querySelector('#t18_2082_1298')
        secoundryobserver3s.observe(target4)

        options = {
            root: document.querySelector('#t18_2082_1283'),
            rootMargin: '0px',
            threshold: 0.8,
        }

        let secoundryobserver1xs = new IntersectionObserver((e) => {
            dl.changes.homesecoundry1 = 'rgba(186,15,23,1.00)'
            dl.changes.homesecoundry2 = 'rgba(149,152,153,1.00)'
            dl.changes.homesecoundry3 = 'rgba(149,152,153,1.00)'
        }, options)

        let secoundryobserver2xs = new IntersectionObserver((e) => {
            dl.changes.homesecoundry1 = 'rgba(149,152,153,1.00)'
            dl.changes.homesecoundry2 = 'rgba(186,15,23,1.00)'
            dl.changes.homesecoundry3 = 'rgba(149,152,153,1.00)'
        }, options)

        let secoundryobserver3xs = new IntersectionObserver((e) => {
            dl.changes.homesecoundry1 = 'rgba(149,152,153,1.00)'
            dl.changes.homesecoundry2 = 'rgba(149,152,153,1.00)'
            dl.changes.homesecoundry3 = 'rgba(186,15,23,1.00)'
        }, options)

        let target5 = document.querySelector('#t18_2082_1285')
        secoundryobserver1xs.observe(target5)

        target5 = document.querySelector('#t18_2082_1286')
        secoundryobserver2xs.observe(target5)

        target5 = document.querySelector('#t18_2082_1287')
        secoundryobserver3xs.observe(target5)
    }

    const blogsOnLoad = async () => {
        dl.functions.getBlogCategory()
        dl.changes.blogQuery = ''
        var res = await dl.functions.getBlogs('12', '', '1')
        dl.changes.blogsList = res.result
    }

    const travelsuggestions = () => {
        dl.functions.getTravelBlogs('9', '1')
    }

    const moviesuggestions = () => {
        dl.functions.getMovieSuggestrion('9', '1')
        dl.functions.getMOvieBlogs()
    }

    const moviedetailsLOad = () => {
        var params = dl.functions.common.getParams()
        var movieId = params.msId
        dl.functions.checkUser()
        dl.functions.getUserDetail()
        dl.functions.getMovieDetails(movieId)
        dl.functions.getMOvieBlogs()
    }

    const blogDetailsLoad = async () => {
        var params = dl.functions.common.getParams()
        var blogId = params.blogId
        dl.functions.checkUser()
        dl.functions.getUserDetail()
        dl.functions.getBlogDetail(blogId)
        dl.functions.getBlogComments(blogId)
    }

    const studyabroadLoad = () => {
        dl.functions.getStudyAbroadBlogs()
    }

    const faqLoad = () => {
        dl.functions.getvisafaq('10', '1')
        dl.functions.getvisaQandABlogs()
    }

    const visaquestionsLoad = () => {
        dl.functions.getvisaQuestions('10', '1')
        dl.functions.getvisaQandABlogs()
    }

    const ridesharingLoad = () => {
        dl.functions.getRideSharing('8', '1')
        dl.changes.rideSharingFilter = [
            {
                filterName: 'SpotsAvailable',
                options: [
                    {
                        name: '1',
                        selected: false,
                    },
                    {
                        name: '2',
                        selected: false,
                    },
                    {
                        name: '3',
                        selected: false,
                    },
                    {
                        name: '4 or more',
                        selected: false,
                    },
                ],
                multi: false,
                open: true,
            },
            {
                filterName: 'Price',
                options: [
                    {
                        name: 'under $10',
                        selected: false,
                    },
                    {
                        name: '$11 to $25',
                        selected: false,
                    },
                    {
                        name: '$26 to $50',
                        selected: false,
                    },
                    {
                        name: '$50 & more',
                        selected: false,
                    },
                ],
                multi: false,
                open: true,
            },
            {
                filterName: 'Range',
                options: [
                    {
                        name: 'Lowest to highest',
                        selected: false,
                    },
                    {
                        name: 'Highest to lowest',
                        selected: false,
                    },
                ],
                multi: false,
                open: true,
            },
            {
                filterName: 'Time',
                options: [
                    {
                        name: 'Morning (6 to 12PM)',
                        selected: false,
                    },
                    {
                        name: 'Afternoon (12PM-6PM)',
                        selected: false,
                    },
                    {
                        name: 'Evening (After 6PM)',
                        selected: false,
                    },
                ],
                multi: false,
                open: true,
            },
        ]
    }

    const ihavearideLoad = () => {
        dl.functions.getHaveARides('8', '1')
        dl.changes.rideSharingFilter = [
            {
                filterName: 'SpotsAvailable',
                options: [
                    {
                        name: '1',
                        selected: false,
                    },
                    {
                        name: '2',
                        selected: false,
                    },
                    {
                        name: '3',
                        selected: false,
                    },
                    {
                        name: '4 or more',
                        selected: false,
                    },
                ],
                multi: false,
                open: true,
            },
            {
                filterName: 'Price',
                options: [
                    {
                        name: 'under $10',
                        selected: false,
                    },
                    {
                        name: '$11 to $25',
                        selected: false,
                    },
                    {
                        name: '$26 to $50',
                        selected: false,
                    },
                    {
                        name: '$50 & more',
                        selected: false,
                    },
                ],
                multi: false,
                open: true,
            },
            {
                filterName: 'Range',
                options: [
                    {
                        name: 'Lowest to highest',
                        selected: false,
                    },
                    {
                        name: 'Highest to lowest',
                        selected: false,
                    },
                ],
                multi: false,
                open: true,
            },
            {
                filterName: 'Time',
                options: [
                    {
                        name: 'Morning (6 to 12PM)',
                        selected: false,
                    },
                    {
                        name: 'Afternoon (12PM-6PM)',
                        selected: false,
                    },
                    {
                        name: 'Evening (After 6PM)',
                        selected: false,
                    },
                ],
                multi: false,
                open: true,
            },
        ]
    }

    const offeredrideLoad = () => {
        var params = dl.functions.common.getParams()
        var rideId = params.rideId
        dl.functions.getRideDetails(rideId)
    }

    const wantedrideLoad = () => {
        var params = dl.functions.common.getParams()
        var rideId = params.rideId
        dl.functions.getRideDetails(rideId)
    }

    const visaQuestionCommentsLoad = () => {
        var params = dl.functions.common.getParams()
        var visaQuestionId = params.visaQuestionId
        dl.changes.visaDetailQuestionId = visaQuestionId
        dl.functions.getVisaQuestionDetail(visaQuestionId)
        dl.functions.getVisaQuestionComments(visaQuestionId)
        dl.functions.getvisaQandABlogs()
    }

    const roomsLoad = async () => {
        await dl.functions.getUserDetail()
        dl.functions.getRooms('9', '1')
    }
    const ihavearoomLoad = () => {
        dl.functions.getUserDetail()
        dl.functions.getNeedAroom('9', '1')
    }
    const homerentalsLoad = () => {
        dl.functions.getUserDetail()
        dl.functions.getHomeRentels('8', '1')
    }
    const ihaveahomerentalLoad = () => {
        dl.functions.getUserDetail()
        dl.functions.getNeedAHome('8', '1')
    }

    const offeredroomdetailsLoad = () => {
        var params = dl.functions.common.getParams()
        var roomId = params.roomId
        dl.functions.getRoomDetails(roomId)
    }

    const wantedroomdetailsLoad = () => {
        var params = dl.functions.common.getParams()
        var roomId = params.roomId
        dl.functions.getNeedARoomDetails(roomId)
    }

    const offeredhomedetailsLoad = () => {
        var params = dl.functions.common.getParams()
        var homeId = params.homeId
        dl.functions.getHomeDetails(homeId)
    }

    const wantedhomedetailsLoad = () => {
        var params = dl.functions.common.getParams()
        var homeId = params.homeId
        dl.functions.getNeedAHomeDetails(homeId)
    }

    const profileLoad = () => {
        var userToken = dl.functions.common.getCookie('userToken')
        if (userToken) {
        } else {
            dl.functions.viewsPlugin.showView('login')
        }
    }

    const moviebookmarksLoad = () => {
        dl.functions.getBookmarkedmovieSuggestions(1)
    }

    const rentalbookmarksLoad = () => {
        dl.functions.getBookmarkedrooms(1)
        dl.changes.roomsBookmarkVisible = 'flex'
        dl.changes.needARoomBookmarkVisible = 'none'
        dl.changes.homesBookmarkVisible = 'none'
        dl.changes.needAHomeBookmarkVisible = 'none'
    }

    const ridebookmarksLoad = () => {
        dl.functions.getBookmarkedRides(1)
    }

    const travelcompanionbookmarksLoad = () => {
        dl.functions.getBookmarkedWantToBeATC(1)
        dl.changes.wantToBeATcBookmarkVisible = 'none'
        dl.changes.offeredTcBookmarkVisible = 'flex'
    }

    const blogbookmarksLoad = () => {
        dl.functions.getBookmarkedBlog(1)
    }

    const questionbookmarksLoad = () => {
        dl.functions.getBookmarkedVisaQuestions(1)
    }

    const rentallistingsLoad = () => {
        dl.functions.getRoomListing('6', '1')
        ;(dl.changes.selectedListingrentelType = 'Rooms/Roommates'),
            (dl.changes.selectedListingType = 'Offered')
        var selector = dl.changes.listingServiceSelector.services
        for (var key in selector) {
            selector[key] = 'rgba(113,113,113,1)'
        }
        selector['rentalText'] = 'rgba(186,15,23,1)'
        selector['rentalborderColor'] = 'rgba(186,15,23,1)'
    }

    const ridelistingsLoad = () => {
        dl.functions.getRideListing('offered', '6', '1')
        var selector = dl.changes.listingServiceSelector.services
        for (var key in selector) {
            selector[key] = 'rgba(113,113,113,1)'
        }
        selector['rideSharingborderColor'] = 'rgba(186,15,23,1)'
        selector['rideSharingText'] = 'rgba(186,15,23,1)'
    }

    const questionlistingsLoad = () => {
        dl.functions.getvisaquestionListing('6', '1', '')
        var selector = dl.changes.listingServiceSelector.services
        for (var key in selector) {
            selector[key] = 'rgba(113,113,113,1)'
        }
        selector['visaQandAText'] = 'rgba(186,15,23,1)'
        selector['visaQandAborderColor'] = 'rgba(186,15,23,1)'
    }

    const listmyroomformLoad = async () => {
        var mindate = new Date()
        dl.changes.iHaveAroomForm.availableFrom.minDate = mindate
        dl.changes.iHaveAroomForm.availableTo.minDate = mindate
        var params = dl.functions.common.getParams()
        var roomId = params.roomId
        var mode = params.mode
        if (roomId) {
            if (mode == 'edit') {
                var res = await dl.functions.getRoomDetails(roomId)
                dl.changes.iHaveAroomForm.type.value = res.raw[0].type
                dl.changes.iHaveAroomForm.address.value = res.raw[0]
                    .exactAddress
                    ? res.raw[0].exactAddress
                    : ''
                dl.changes.iHaveAroomForm.zipCode.value =
                    res.raw[0].zipCode.zipcode
                dl.changes.iHaveAroomForm.leaseType.value =
                    res.raw[0].stayLeaseType
                dl.changes.iHaveAroomForm.availableFrom.value =
                    res.raw[0].availabilityFrom
                dl.changes.iHaveAroomForm.availableTo.value =
                    res.raw[0].availabilityTo
                dl.changes.iHaveAroomForm.noOfPeople.value =
                    res.raw[0].noOfPeople
                dl.changes.iHaveAroomForm.attatchedBath.value =
                    res.raw[0].attachedBath == true ? 'yes' : 'No'
                dl.changes.iHaveAroomForm.gender.value =
                    res.raw[0].preferedGender
                dl.changes.iHaveAroomForm.rent.value = res.raw[0].preferedRent
                    ? res.raw[0].preferedRent
                    : ''
                dl.changes.iHaveAroomForm.priceMode.value = res.raw[0].pricemode
                    ? res.raw[0].pricemode
                    : 'Per month'
                dl.changes.iHaveAroomForm.utilities.value = res.raw[0]
                    .utilitiesArr
                    ? res.raw[0].utilitiesArr
                    : []
                dl.changes.iHaveAroomForm.furnishing.value =
                    res.raw[0].roomFurnishingRequired
                dl.changes.iHaveAroomForm.amenities.value =
                    res.raw[0].amenitiesArr
                dl.changes.iHaveAroomForm.vegPreference.value =
                    res.raw[0].vegPreference
                dl.changes.iHaveAroomForm.smokingPolicy.value =
                    res.raw[0].smokingPolicy
                dl.changes.iHaveAroomForm.petFriendly.value =
                    res.raw[0].petFriendly
                ;(dl.changes.iHaveAroomForm.age.value = res.raw[0].age),
                    (dl.changes.iHaveAroomForm.occupation.value =
                        res.raw[0].occupation),
                    (dl.changes.iHaveAroomForm.languages.value =
                        res.raw[0].languagesArr),
                    (dl.changes.iHaveAroomForm.title.value = res.raw[0].title
                        ? res.raw[0].title
                        : '')
                dl.changes.iHaveAroomForm.description.value =
                    res.raw[0].description
                dl.changes.iHaveAroomForm.name.value = res.raw[0].name
                dl.changes.iHaveAroomForm.email.value = res.raw[0].email
                dl.changes.iHaveAroomForm.phone.value =
                    res.raw[0].contactNumber.substring(3)
                dl.changes.iHaveAroomForm.phone.selectPlaceHolder =
                    res.raw[0].contactNumber.substring(0, 3)
                dl.changes.iHaveAroomForm.phone.countryCodeValue =
                    res.raw[0].contactNumber.substring(0, 3)
                var files = []
                for (var i = 0; i < res.raw[0].files.length; i++) {
                    var obj = {}
                    obj['imgUrl'] = 'url(' + res.raw[0].files[i].url + ')'
                    obj['url'] = res.raw[0].files[i].url
                    obj['secure'] = res.raw[0].files[i].secure
                    files.push(obj)
                }
                dl.changes.iHaveAroomForm.photos.value = files
            } else {
                dl.functions.viewsPlugin.showView('error')
            }
        } else {
            var userToken = dl.functions.common.getCookie('userToken')

            if (userToken) {
                dl.functions.modalsPlugin.openModal('loading')
                var listings = await dl.functions.getRoomListing(8, 1)
                let flag = false
                if (listings.status == 200) {
                    var list = listings.result
                    for (let i = 0; i < list.length; i++) {
                        if (
                            list[i].status == 'active' &&
                            list[i].rentalType == 'Room'
                        ) {
                            flag = true
                            dl.changes.limitReachedScreen = 'rooms'
                            dl.functions.modalsPlugin.closeModal('loading')
                            dl.functions.modalsPlugin.openModal('limitReached')
                            // alert("here")
                            return
                        }
                    }
                }
                dl.changes.iHaveAroomForm.name.value =
                    dl.changes.userDetail.firstName +
                    ' ' +
                    dl.changes.userDetail.lastName
                dl.changes.iHaveAroomForm.email.value =
                    dl.changes.userDetail.email
                if (dl.changes.userDetail.phone.length > 12) {
                    dl.changes.iHaveAroomForm.phone.selectPlaceHolder = '+91'
                    dl.changes.iHaveAroomForm.phone.countryCodeValue = '+91'
                    dl.changes.iHaveAroomForm.phone.value =
                        dl.changes.userDetail.phone.substring(3)
                } else {
                    dl.changes.iHaveAroomForm.phone.selectPlaceHolder = '+1'
                    dl.changes.iHaveAroomForm.phone.countryCodeValue = '+1'
                    dl.changes.iHaveAroomForm.phone.value =
                        dl.changes.userDetail.phone.substring(2)
                }
            }
        }
    }

    const ineedaroomformLoad = async () => {
        var mindate = new Date()
        dl.changes.iNeedAroomForm.neededFrom.minDate = mindate
        dl.changes.iNeedAroomForm.neededTo.minDate = mindate
        var params = dl.functions.common.getParams()
        var roomId = params.roomId
        var mode = params.mode
        if (roomId) {
            if (mode == 'edit') {
                var res = await dl.functions.getNeedARoomDetails(roomId)
                dl.changes.iNeedAroomForm.type.value = res.raw[0].type
                dl.changes.iNeedAroomForm.zipCode.value =
                    res.raw[0].zipCode.zipcode
                dl.changes.iNeedAroomForm.leaseType.value =
                    res.raw[0].stayLeaseType
                dl.changes.iNeedAroomForm.neededFrom.value =
                    res.raw[0].availabilityFrom
                dl.changes.iNeedAroomForm.neededTo.value =
                    res.raw[0].availabilityTo
                dl.changes.iNeedAroomForm.noOfPeople.value =
                    res.raw[0].noOfPeople
                dl.changes.iNeedAroomForm.attatchedBath.value =
                    res.raw[0].attachedBath == true ? 'Yes' : 'No'
                dl.changes.iNeedAroomForm.priceMode.value = res.raw[0].pricemode
                dl.changes.iNeedAroomForm.gender.value =
                    res.raw[0].preferedGender
                dl.changes.iNeedAroomForm.utilities.value = res.raw[0]
                    .utilitiesArr
                    ? res.raw[0].utilitiesArr
                    : []
                dl.changes.iNeedAroomForm.furnishing.value =
                    res.raw[0].roomFurnishingRequired
                dl.changes.iNeedAroomForm.amenities.value =
                    res.raw[0].amenitiesArr
                dl.changes.iNeedAroomForm.vegPreference.value =
                    res.raw[0].vegPreference
                dl.changes.iNeedAroomForm.smoking.value =
                    res.raw[0].smokingPolicy
                dl.changes.iNeedAroomForm.pets.value = res.raw[0].petFriendly
                dl.changes.iNeedAroomForm.age.value = res.raw[0].Age
                dl.changes.iNeedAroomForm.occupation.value =
                    res.raw[0].occupation
                dl.changes.iNeedAroomForm.languages.value =
                    res.raw[0].languagesArr
                dl.changes.iNeedAroomForm.title.value = res.raw[0].title
                dl.changes.iNeedAroomForm.description.value =
                    res.raw[0].description
                dl.changes.iNeedAroomForm.name.value = res.raw[0].name
                dl.changes.iNeedAroomForm.email.value = res.raw[0].email
                dl.changes.iNeedAroomForm.phone.value =
                    res.raw[0].contactNumber.substring(3)
                dl.changes.iNeedAroomForm.phone.selectPlaceHolder =
                    res.raw[0].contactNumber.substring(0, 3)
                dl.changes.iNeedAroomForm.phone.countryCodeValue =
                    res.raw[0].contactNumber.substring(0, 3)
            } else {
                dl.functions.viewsPlugin.showView('error')
            }
        } else {
            var userToken = dl.functions.common.getCookie('userToken')
            if (userToken) {
                dl.functions.modalsPlugin.openModal('loading')
                var listings = await dl.functions.getneedARoomListing(8, 1)
                let flag = false
                if (listings.status == 200) {
                    var list = listings.result
                    for (let i = 0; i < list.length; i++) {
                        if (
                            list[i].status == 'active' &&
                            list[i].rentalType == 'Room'
                        ) {
                            flag = true
                            dl.changes.limitReachedScreen = 'rooms'
                            dl.functions.modalsPlugin.closeModal('loading')
                            dl.functions.modalsPlugin.openModal('limitReached')
                            // alert("here")
                            return
                        }
                    }
                }
                dl.changes.iNeedAroomForm.name.value =
                    dl.changes.userDetail.firstName +
                    ' ' +
                    dl.changes.userDetail.lastName
                dl.changes.iNeedAroomForm.email.value =
                    dl.changes.userDetail.email
                if (dl.changes.userDetail.phone.length > 12) {
                    dl.changes.iNeedAroomForm.phone.selectPlaceHolder = '+91'
                    dl.changes.iNeedAroomForm.phone.countryCodeValue = '+91'
                    dl.changes.iNeedAroomForm.phone.value =
                        dl.changes.userDetail.phone.substring(3)
                } else {
                    dl.changes.iNeedAroomForm.phone.selectPlaceHolder = '+1'
                    dl.changes.iNeedAroomForm.phone.countryCodeValue = '+1'
                    dl.changes.iNeedAroomForm.phone.value =
                        dl.changes.userDetail.phone.substring(2)
                }
            }
        }
    }

    const listmyhomeformformLoad = async () => {
        var mindate = new Date()
        dl.changes.iHaveAhomeForm.availableFrom.minDate = mindate
        dl.changes.iHaveAhomeForm.availableTo.minDate = mindate
        var params = dl.functions.common.getParams()
        var homeId = params.homeId
        var mode = params.mode
        if (homeId) {
            if (mode == 'edit') {
                var res = await dl.functions.getHomeDetails(homeId)
                dl.changes.iHaveAhomeForm.type.value = res.raw[0].type
                dl.changes.iHaveAhomeForm.address.value = res.raw[0]
                    .exactAddress
                    ? res.raw[0].exactAddress
                    : ''
                dl.changes.iHaveAhomeForm.zipCode.value =
                    res.raw[0].zipCode.zipcode
                dl.changes.iHaveAhomeForm.leaseType.value =
                    res.raw[0].stayLeaseType
                dl.changes.iHaveAhomeForm.availableFrom.value =
                    res.raw[0].availabilityFrom
                dl.changes.iHaveAhomeForm.preferredRent.value = res.raw[0].rent
                dl.changes.iHaveAhomeForm.priceMode.value = res.raw[0].pricemode
                    ? res.raw[0].pricemode
                    : 'Per month'
                dl.changes.iHaveAhomeForm.availableTo.value =
                    res.raw[0].availabilityTo
                dl.changes.iHaveAhomeForm.utilities.value = res.raw[0]
                    .utilitiesArr
                    ? res.raw[0].utilitiesArr
                    : []
                dl.changes.iHaveAhomeForm.furnishing.value =
                    res.raw[0].roomFurnishingRequired
                dl.changes.iHaveAhomeForm.amenities.value =
                    res.raw[0].amenitiesArr
                dl.changes.iHaveAhomeForm.smokingPolicy.value =
                    res.raw[0].smokingPolicy
                dl.changes.iHaveAhomeForm.petFriendly.value =
                    res.raw[0].petFriendly
                dl.changes.iHaveAhomeForm.age.value = res.raw[0].age
                dl.changes.iHaveAhomeForm.occupation.value =
                    res.raw[0].occupation
                dl.changes.iHaveAhomeForm.title.value = res.raw[0].title
                    ? res.raw[0].title
                    : ''
                dl.changes.iHaveAhomeForm.description.value = res.raw[0]
                    .description
                    ? res.raw[0].description
                    : ''
                dl.changes.iHaveAhomeForm.name.value = res.raw[0].name
                dl.changes.iHaveAhomeForm.email.value = res.raw[0].email
                dl.changes.iHaveAhomeForm.phone.selectPlaceHolder =
                    res.raw[0].contactNumber.substring(0, 3)
                dl.changes.iHaveAhomeForm.phone.value =
                    res.raw[0].contactNumber.substring(3)
                dl.changes.iHaveAhomeForm.phone.countryCodeValue =
                    res.raw[0].contactNumber.substring(0, 3)
                var files = []
                for (var i = 0; i < res.raw[0].files.length; i++) {
                    var obj = {}
                    obj['imgUrl'] = 'url(' + res.raw[0].files[i].url + ')'
                    obj['url'] = res.raw[0].files[i].url
                    obj['secure'] = res.raw[0].files[i].secure
                    files.push(obj)
                }
                dl.changes.iHaveAhomeForm.photos.value = files
            } else {
                dl.functions.viewsPlugin.showView('error')
            }
        } else {
            var userToken = dl.functions.common.getCookie('userToken')
            if (userToken) {
                dl.functions.modalsPlugin.openModal('loading')
                var listings = await dl.functions.getRoomListing(8, 1)
                let flag = false
                if (listings.status == 200) {
                    var list = listings.result
                    for (let i = 0; i < list.length; i++) {
                        if (
                            list[i].status == 'active' &&
                            list[i].rentalType == 'Home'
                        ) {
                            flag = true
                            dl.changes.limitReachedScreen = 'rooms'
                            dl.functions.modalsPlugin.closeModal('loading')
                            dl.functions.modalsPlugin.openModal('limitReached')
                            // alert("here")
                            return
                        }
                    }
                }
                dl.changes.iHaveAhomeForm.name.value =
                    dl.changes.userDetail.firstName +
                    ' ' +
                    dl.changes.userDetail.lastName
                dl.changes.iHaveAhomeForm.email.value =
                    dl.changes.userDetail.email
                if (dl.changes.userDetail.phone.length > 12) {
                    dl.changes.iHaveAhomeForm.phone.selectPlaceHolder = '+91'
                    dl.changes.iHaveAhomeForm.phone.countryCodeValue = '+91'
                    dl.changes.iHaveAhomeForm.phone.value =
                        dl.changes.userDetail.phone.substring(3)
                } else {
                    dl.changes.iHaveAhomeForm.phone.selectPlaceHolder = '+1'
                    dl.changes.iHaveAhomeForm.phone.countryCodeValue = '+1'
                    dl.changes.iHaveAhomeForm.phone.value =
                        dl.changes.userDetail.phone.substring(2)
                }
            }
        }
    }

    const ineedahomeformLoad = async () => {
        var params = dl.functions.common.getParams()
        var homeId = params.homeId
        var mode = params.mode
        if (homeId) {
            if (mode == 'edit') {
                var res = await dl.functions.getNeedAHomeDetails(homeId)
                dl.changes.iNeedAhomeForm.title.value = res.raw[0].title
                    ? res.raw[0].title
                    : ''
                dl.changes.iNeedAhomeForm.description.value = res.raw[0]
                    .description
                    ? res.raw[0].description
                    : ''
                dl.changes.iNeedAhomeForm.type.value = res.raw[0].type
                dl.changes.iNeedAhomeForm.address.value =
                    res.raw[0].exactAddress
                dl.changes.iNeedAhomeForm.zipCode.value =
                    res.raw[0].zipCode.zipcode
                dl.changes.iNeedAhomeForm.leaseType.value =
                    res.raw[0].stayLeaseType
                dl.changes.iNeedAhomeForm.neededBy.value = res.raw[0].neededBy
                dl.changes.iNeedAhomeForm.noOfPeople.value =
                    res.raw[0].noOfPeople
                dl.changes.iNeedAhomeForm.utilities.value = res.raw[0]
                    .utilitiesArr
                    ? res.raw[0].utilitiesArr
                    : []
                dl.changes.iNeedAhomeForm.furnishing.value =
                    res.raw[0].roomFurnishingRequired
                dl.changes.iNeedAhomeForm.amenities.value =
                    res.raw[0].amenitiesArr
                dl.changes.iNeedAhomeForm.smokingPolicy.value =
                    res.raw[0].smokingPolicy
                dl.changes.iNeedAhomeForm.petFriendly.value =
                    res.raw[0].petFriendly
                dl.changes.iNeedAhomeForm.name.value = res.raw[0].name
                dl.changes.iNeedAhomeForm.email.value = res.raw[0].email
                dl.changes.iNeedAhomeForm.phone.selectPlaceHolder =
                    res.raw[0].contactNumber.substring(0, 3)
                dl.changes.iNeedAhomeForm.phone.value =
                    res.raw[0].contactNumber.substring(3)
                dl.changes.iNeedAhomeForm.phone.countryCodeValue =
                    res.raw[0].contactNumber.substring(0, 3)
            } else {
                dl.functions.viewsPlugin.showView('error')
            }
        } else {
            var userToken = dl.functions.common.getCookie('userToken')
            if (userToken) {
                var listings = await dl.functions.getneedARoomListing(8, 1)
                let flag = false
                if (listings.status == 200) {
                    var list = listings.result
                    for (let i = 0; i < list.length; i++) {
                        if (
                            list[i].status == 'active' &&
                            list[i].rentalType == 'Home'
                        ) {
                            flag = true
                            dl.changes.limitReachedScreen = 'rooms'
                            dl.functions.modalsPlugin.closeModal('loading')
                            dl.functions.modalsPlugin.openModal('limitReached')
                            // alert("here")
                            return
                        }
                    }
                }
                dl.changes.iNeedAhomeForm.name.value =
                    dl.changes.userDetail.firstName +
                    ' ' +
                    dl.changes.userDetail.lastName
                dl.changes.iNeedAhomeForm.email.value =
                    dl.changes.userDetail.email
                if (dl.changes.userDetail.phone.length > 12) {
                    dl.changes.iNeedAhomeForm.phone.selectPlaceHolder = '+91'
                    dl.changes.iNeedAhomeForm.phone.countryCodeValue = '+91'
                    dl.changes.iNeedAhomeForm.phone.value =
                        dl.changes.userDetail.phone.substring(3)
                } else {
                    dl.changes.iNeedAhomeForm.phone.selectPlaceHolder = '+1'
                    dl.changes.iNeedAhomeForm.phone.countryCodeValue = '+1'
                    dl.changes.iNeedAhomeForm.phone.value =
                        dl.changes.userDetail.phone.substring(2)
                }
            }
        }
    }

    const ineedarideLoad = async () => {
        var mindate = new Date()
        dl.changes.needARideForm.date.minDate = mindate
        var params = dl.functions.common.getParams()
        var rideId = params.rideId
        var mode = params.mode
        if (rideId) {
            if (mode == 'edit') {
                var res = await dl.functions.getRideDetails(rideId)
                dl.changes.needARideForm.to.value = res[0].to.zipcode
                dl.changes.needARideForm.from.value = res[0].from.zipcode
                dl.changes.needARideForm.price.value = res[0].price
                dl.changes.needARideForm.date.value = res[0].dateOfJourney
                dl.changes.needARideForm.noOfPeople.value = res[0].spotAvailable
                dl.changes.needARideForm.time.value = res[0].time
                    ? res[0].time
                    : ''
                dl.changes.needARideForm.phone.selectPlaceHolder = res[0]
                    .contactNumber
                    ? res[0].contactNumber.substring(0, 3)
                    : ''
                dl.changes.needARideForm.phone.value = res[0].contactNumber
                    ? res[0].contactNumber.substring(3)
                    : ''
                dl.changes.needARideForm.phone.countryCodeValue = res[0]
                    .contactNumber
                    ? res[0].contactNumber.substring(0, 3)
                    : ''
                dl.changes.needARideForm.email.value = res[0].email
                    ? res[0].email
                    : ''
            } else {
                dl.functions.viewsPlugin.showView('error')
            }
        } else {
            var userToken = dl.functions.common.getCookie('userToken')
            if (userToken) {
                dl.changes.needARideForm.email.value =
                    dl.changes.userDetail.email
                if (dl.changes.userDetail.phone.length > 12) {
                    dl.changes.needARideForm.phone.selectPlaceHolder = '+91'
                    dl.changes.needARideForm.phone.countryCodeValue = '+91'
                    dl.changes.needARideForm.phone.value =
                        dl.changes.userDetail.phone.substring(3)
                } else {
                    dl.changes.needARideForm.phone.selectPlaceHolder = '+1'
                    dl.changes.needARideForm.phone.countryCodeValue = '+1'
                    dl.changes.needARideForm.phone.value =
                        dl.changes.userDetail.phone.substring(2)
                }
            }
        }
    }

    const listmyrideLoad = async () => {
        var mindate = new Date()
        dl.changes.listMyRideForm.date.minDate = mindate
        var params = dl.functions.common.getParams()
        var rideId = params.rideId
        var mode = params.mode
        if (rideId) {
            if (mode == 'edit') {
                var res = await dl.functions.getRideDetails(rideId)
                dl.changes.listMyRideForm.to.value = res[0].to.zipcode
                dl.changes.listMyRideForm.from.value = res[0].from.zipcode
                dl.changes.listMyRideForm.price.value = res[0].price
                dl.changes.listMyRideForm.date.value = res[0].dateOfJourney
                dl.changes.listMyRideForm.noOfPeople.value =
                    res[0].spotAvailable
                dl.changes.listMyRideForm.time.value = res[0].time
                    ? res[0].time
                    : ''
                dl.changes.listMyRideForm.phone.selectPlaceHolder = res[0]
                    .contactNumber
                    ? res[0].contactNumber.substring(0, 3)
                    : ''
                dl.changes.listMyRideForm.phone.value = res[0].contactNumber
                    ? res[0].contactNumber.substring(3)
                    : ''
                dl.changes.listMyRideForm.phone.countryCodeValue = res[0]
                    .contactNumber
                    ? res[0].contactNumber.substring(0, 3)
                    : ''
                dl.changes.listMyRideForm.email.value = res[0].email
                    ? res[0].email
                    : ''
            } else {
                dl.functions.viewsPlugin.showView('error')
            }
        } else {
            var userToken = dl.functions.common.getCookie('userToken')
            if (userToken) {
                dl.changes.listMyRideForm.email.value =
                    dl.changes.userDetail.email
                if (dl.changes.userDetail.phone.length > 12) {
                    dl.changes.listMyRideForm.phone.selectPlaceHolderr = '+91'
                    dl.changes.listMyRideForm.phone.countryCodeValue = '+91'
                    dl.changes.listMyRideForm.phone.value =
                        dl.changes.userDetail.phone.substring(3)
                } else {
                    dl.changes.listMyRideForm.phone.selectPlaceHolder = '+1'
                    dl.changes.listMyRideForm.phone.countryCodeValue = '+1'
                    dl.changes.listMyRideForm.phone.value =
                        dl.changes.userDetail.phone.substring(2)
                }
            }
        }
    }

    const visabookingsLoad = () => {
        dl.functions.getBooking('Visa %26 Immigration', '6', '1')
        dl.changes.bookingselector.services.studyAbroadBorderColor =
            'rgba(113,113,113,1)'
        dl.changes.bookingselector.services.visaImmigrationBOrderColor =
            'rgba(186,15,23,1)'
        dl.changes.bookingselector.services.studyAbroadText =
            'rgba(113,113,113,1)'
        dl.changes.bookingselector.services.visaText = 'rgba(186,15,23,1)'
    }
    const studyabroadbookingsLoad = () => {
        dl.functions.getBooking('Study abroad', '6', '1')
        dl.changes.bookingselector.services.studyAbroadBorderColor =
            'rgba(186,15,23,1)'
        dl.changes.bookingselector.services.visaImmigrationBOrderColor =
            'rgba(113,113,113,1)'
        dl.changes.bookingselector.services.studyAbroadText =
            'rgba(186,15,23,1)'
        dl.changes.bookingselector.services.visaText = 'rgba(113,113,113,1)'
    }

    const travelcompanionLoad = () => {
        dl.functions.getIWantToBeTC('8', '1')
        dl.changes.travelComapanionFilter = [
            {
                filterName: 'Nearby Airport',
                options: [
                    {
                        name: '0-50 Miles',
                        selected: false,
                    },
                    {
                        name: '50-150 Miles',
                        selected: false,
                    },
                    {
                        name: '150 - 300 Miles',
                        selected: false,
                    },
                    {
                        name: '300+',
                        selected: false,
                    },
                ],
                multi: false,
                open: true,
            },
            {
                filterName: 'Language',
                options: [
                    {
                        name: 'Telugu',
                        selected: false,
                    },
                    {
                        name: 'Tamil',
                        selected: false,
                    },
                    {
                        name: 'Kannada',
                        selected: false,
                    },
                    {
                        name: 'Hindi',
                        selected: false,
                    },
                    {
                        name: 'Manipuri',
                        selected: false,
                    },
                    {
                        name: 'English',
                        selected: false,
                    },
                    {
                        name: 'Urdu',
                        selected: false,
                    },
                    {
                        name: 'Malayalam',
                        selected: false,
                    },
                    {
                        name: 'Gujarati',
                        selected: false,
                    },
                    {
                        name: 'Bengali',
                        selected: false,
                    },
                    {
                        name: 'Marathi',
                        selected: false,
                    },
                    {
                        name: 'Nepali',
                        selected: false,
                    },
                    {
                        name: 'Oriya',
                        selected: false,
                    },
                    {
                        name: 'Punjabi',
                        selected: false,
                    },
                    {
                        name: 'Sanskrit',
                        selected: false,
                    },
                    {
                        name: 'Sindhi',
                        selected: false,
                    },
                    {
                        name: 'Santhali',
                        selected: false,
                    },
                    {
                        name: 'Maithili',
                        selected: false,
                    },
                    {
                        name: 'Dogri',
                        selected: false,
                    },
                    {
                        name: 'Assamese',
                        selected: false,
                    },
                    {
                        name: 'Kokani',
                        selected: false,
                    },
                    {
                        name: 'Kashmiri',
                        selected: false,
                    },
                    {
                        name: 'Other',
                        selected: false,
                    },
                ],
                multi: false,
                open: false,
            },
            {
                filterName: 'Airlines',
                options: [
                    {
                        name: 'Air India',
                        selected: false,
                    },
                    {
                        name: 'Qatar',
                        selected: false,
                    },
                    {
                        name: 'Emirates',
                        selected: false,
                    },
                    {
                        name: 'Ethihad',
                        selected: false,
                    },
                    {
                        name: 'Gulf Airways',
                        selected: false,
                    },
                    {
                        name: 'American Airlines',
                        selected: false,
                    },
                    {
                        name: 'United Airlines',
                        selected: false,
                    },
                    {
                        name: 'Delta Airlines',
                        selected: false,
                    },
                    {
                        name: 'British Airways',
                        selected: false,
                    },
                    {
                        name: 'Air France',
                        selected: false,
                    },
                    {
                        name: 'Japan Airlines',
                        selected: false,
                    },
                    {
                        name: 'Singapore Airlines',
                        selected: false,
                    },
                    {
                        name: 'Lufthansa',
                        selected: false,
                    },
                    {
                        name: 'Turkish Airlines',
                        selected: false,
                    },
                    {
                        name: 'Malaysia Airlines',
                        selected: false,
                    },
                    {
                        name: 'Air Canada',
                        selected: false,
                    },
                    {
                        name: 'KLM',
                        selected: false,
                    },
                    {
                        name: 'Other',
                        selected: false,
                    },
                ],
                multi: false,
                open: false,
            },
            {
                filterName: 'Already Booked',
                options: [
                    {
                        name: 'yes',
                        selected: false,
                    },
                    {
                        name: 'no',
                        selected: false,
                    },
                ],
                multi: false,
                open: true,
            },
            {
                filterName: 'Vaccinated',
                options: [
                    {
                        name: 'yes',
                        selected: false,
                    },
                    {
                        name: 'no',
                        selected: false,
                    },
                ],
                multi: false,
                open: true,
            },
            // {
            //   "filterName": "Tip",
            //   "options": [
            //     {
            //       "name": "Lowest to Highest",
            //       "selected": false
            //     },
            //     {
            //       "name": "Highest to Lowest",
            //       "selected": false
            //     }
            //   ],
            //   "multi": false,
            //   "open": true
            // }
        ]
    }

    const iwanttobetravelcompanionLoad = () => {
        dl.functions.getINeedATC('8', '1')
        dl.changes.travelComapanionFilter = [
            {
                filterName: 'Nearby Airport',
                options: [
                    {
                        name: '0-50 Miles',
                        selected: false,
                    },
                    {
                        name: '50-150 Miles',
                        selected: false,
                    },
                    {
                        name: '150 - 300 Miles',
                        selected: false,
                    },
                    {
                        name: '300+',
                        selected: false,
                    },
                ],
                multi: false,
                open: true,
            },
            {
                filterName: 'Language',
                options: [
                    {
                        name: 'Telugu',
                        selected: false,
                    },
                    {
                        name: 'Tamil',
                        selected: false,
                    },
                    {
                        name: 'Kannada',
                        selected: false,
                    },
                    {
                        name: 'Hindi',
                        selected: false,
                    },
                    {
                        name: 'Manipuri',
                        selected: false,
                    },
                    {
                        name: 'English',
                        selected: false,
                    },
                    {
                        name: 'Urdu',
                        selected: false,
                    },
                    {
                        name: 'Malayalam',
                        selected: false,
                    },
                    {
                        name: 'Gujarati',
                        selected: false,
                    },
                    {
                        name: 'Bengali',
                        selected: false,
                    },
                    {
                        name: 'Marathi',
                        selected: false,
                    },
                    {
                        name: 'Nepali',
                        selected: false,
                    },
                    {
                        name: 'Oriya',
                        selected: false,
                    },
                    {
                        name: 'Punjabi',
                        selected: false,
                    },
                    {
                        name: 'Sanskrit',
                        selected: false,
                    },
                    {
                        name: 'Sindhi',
                        selected: false,
                    },
                    {
                        name: 'Santhali',
                        selected: false,
                    },
                    {
                        name: 'Maithili',
                        selected: false,
                    },
                    {
                        name: 'Dogri',
                        selected: false,
                    },
                    {
                        name: 'Assamese',
                        selected: false,
                    },
                    {
                        name: 'Kokani',
                        selected: false,
                    },
                    {
                        name: 'Kashmiri',
                        selected: false,
                    },
                    {
                        name: 'Other',
                        selected: false,
                    },
                ],
                multi: false,
                open: false,
            },
            {
                filterName: 'Airlines',
                options: [
                    {
                        name: 'Air India',
                        selected: false,
                    },
                    {
                        name: 'Qatar',
                        selected: false,
                    },
                    {
                        name: 'Emirates',
                        selected: false,
                    },
                    {
                        name: 'Ethihad',
                        selected: false,
                    },
                    {
                        name: 'Gulf Airways',
                        selected: false,
                    },
                    {
                        name: 'American Airlines',
                        selected: false,
                    },
                    {
                        name: 'United Airlines',
                        selected: false,
                    },
                    {
                        name: 'Delta Airlines',
                        selected: false,
                    },
                    {
                        name: 'British Airways',
                        selected: false,
                    },
                    {
                        name: 'Air France',
                        selected: false,
                    },
                    {
                        name: 'Japan Airlines',
                        selected: false,
                    },
                    {
                        name: 'Singapore Airlines',
                        selected: false,
                    },
                    {
                        name: 'Lufthansa',
                        selected: false,
                    },
                    {
                        name: 'Turkish Airlines',
                        selected: false,
                    },
                    {
                        name: 'Malaysia Airlines',
                        selected: false,
                    },
                    {
                        name: 'Air Canada',
                        selected: false,
                    },
                    {
                        name: 'KLM',
                        selected: false,
                    },
                    {
                        name: 'Other',
                        selected: false,
                    },
                ],
                multi: false,
                open: false,
            },
            {
                filterName: 'Already Booked',
                options: [
                    {
                        name: 'yes',
                        selected: false,
                    },
                    {
                        name: 'no',
                        selected: false,
                    },
                ],
                multi: false,
                open: true,
            },
            {
                filterName: 'Vaccinated',
                options: [
                    {
                        name: 'yes',
                        selected: false,
                    },
                    {
                        name: 'no',
                        selected: false,
                    },
                ],
                multi: false,
                open: true,
            },
            // {
            //   "filterName": "Tip",
            //   "options": [
            //     {
            //       "name": "Lowest to Highest",
            //       "selected": false
            //     },
            //     {
            //       "name": "Highest to Lowest",
            //       "selected": false
            //     }
            //   ],
            //   "multi": false,
            //   "open": true
            // }
        ]
    }

    const offeredtcdetailsLoad = () => {
        var params = dl.functions.common.getParams()
        var tcId = params.tcId
        dl.functions.getWantToBeTcDetail(tcId)
    }

    const wantedtcdetailsLoad = () => {
        var params = dl.functions.common.getParams()
        var tcId = params.tcId
        dl.functions.getNeedATcDetail(tcId)
    }

    const travelcompanionlistingLoad = () => {
        dl.functions.getWillBeATcListing('6', '1')
        var selector = dl.changes.listingServiceSelector.services
        for (var key in selector) {
            selector[key] = 'rgba(113,113,113,1)'
        }
        selector['TcText'] = 'rgba(186,15,23,1)'
        selector['TcborderColor'] = 'rgba(186,15,23,1)'
    }

    const ineedatravelcompanionformLoad = async () => {
        var mindate = new Date()
        dl.changes.ineedatcform.date.minDate = mindate
        dl.changes.ineedatcform.fromDate.minDate = mindate
        dl.changes.ineedatcform.toDate.minDate = mindate
        var params = dl.functions.common.getParams()
        var tcId = params.tcId
        var mode = params.mode
        if (tcId) {
            if (mode == 'edit') {
                var res = await dl.functions.getNeedATcDetail(tcId)
                var result = res[0]
                if (result.ticketBooked == 'no') {
                    dl.changes.ticketNotBooked = 'flex'
                    dl.changes.ticketBooked = 'none'
                } else {
                    dl.changes.ticketNotBooked = 'none'
                    dl.changes.ticketBooked = 'flex'
                }
                dl.changes.ineedatcform.firstName.value = result.firstName
                dl.changes.ineedatcform.lastName.value = result.lastName
                dl.changes.ineedatcform.from.value = result.from.name
                dl.changes.ineedatcform.from.selectedAirport = result.from
                dl.changes.ineedatcform.to.value = result.to.name
                dl.changes.ineedatcform.to.selectedAirport = result.to
                dl.changes.ineedatcform.bookedTicket.value = result.ticketBooked
                dl.changes.ineedatcform.addStop.value = result.stops[0]
                    ? result.stops[0]
                    : ''
                dl.changes.ineedatcform.addStop2.value = result.stops[1]
                    ? result.stops[1]
                    : ''

                if (dl.changes.ineedatcform.addStop.value.length >= 1) {
                    dl.changes.iNeedATCstops.stop1 = 'flex'
                    dl.changes.iNeedATCstops.stop2 = 'none'
                    dl.changes.iNeedATCstops.addbutton = 'flex'
                    dl.changes.iNeedATCstops.stopCount = 1
                }

                if (dl.changes.ineedatcform.addStop2.value.length >= 1) {
                    dl.changes.iNeedATCstops.stop1 = 'flex'
                    dl.changes.iNeedATCstops.stop2 = 'flex'
                    dl.changes.iNeedATCstops.addbutton = 'none'
                    dl.changes.iNeedATCstops.stopCount = 2
                }

                dl.changes.ineedatcform.date.value = result.dateOfJourrneyISO
                dl.changes.ineedatcform.time.value = result.timeOfJourney
                dl.changes.ineedatcform.fromDate.value = result.fromDate
                dl.changes.ineedatcform.toDate.value = result.toDate
                dl.changes.ineedatcform.airline.value = result.airline
                dl.changes.ineedatcform.preferredAirline.value =
                    result.preferredAirline ? result.preferredAirline : ''
                dl.changes.ineedatcform.email.value = result.email
                dl.changes.ineedatcform.phone.value = result.phone.substring(3)
                dl.changes.ineedatcform.phone.countryCodeValue =
                    result.phone.substring(0, 3)
                dl.changes.ineedatcform.languages.value = result.languageKnown
                dl.changes.ineedatcform.vaccinated.value = result.vaccinated
                dl.changes.ineedatcform.tip.value = result.tip.substring(1)
            } else {
                dl.functions.viewsPlugin.showView('error')
            }
        } else {
            var userToken = dl.functions.common.getCookie('userToken')
            if (userToken) {
                dl.changes.ineedatcform.firstName.value =
                    dl.changes.userDetail.firstName
                dl.changes.ineedatcform.lastName.value =
                    dl.changes.userDetail.lastName
                dl.changes.ineedatcform.email.value =
                    dl.changes.userDetail.email
                if (dl.changes.userDetail.phone.length > 12) {
                    dl.changes.ineedatcform.phone.countryCodeValue = '+91'
                    dl.changes.ineedatcform.phone.value =
                        dl.changes.userDetail.phone.substring(3)
                } else {
                    dl.changes.ineedatcform.phone.countryCodeValue = '+1'
                    dl.changes.ineedatcform.phone.value =
                        dl.changes.userDetail.phone.substring(2)
                }
            }
        }
    }

    const iwanttobetcformLoad = async () => {
        var mindate = new Date()
        dl.changes.iwanttobetcform.date.minDate = mindate
        dl.changes.iwanttobetcform.fromDate.minDate = mindate
        dl.changes.iwanttobetcform.toDate.minDate = mindate
        var params = dl.functions.common.getParams()
        var tcId = params.tcId
        var mode = params.mode
        if (tcId) {
            if (mode == 'edit') {
                var res = await dl.functions.getWantToBeTcDetail(tcId)
                var result = res[0]
                if (result.ticketBooked == 'no') {
                    dl.changes.ticketNotBooked = 'flex'
                    dl.changes.ticketBooked = 'none'
                } else {
                    dl.changes.ticketNotBooked = 'none'
                    dl.changes.ticketBooked = 'flex'
                }
                dl.changes.iwanttobetcform.firstName.value = result.firstName
                dl.changes.iwanttobetcform.lastName.value = result.lastName
                dl.changes.iwanttobetcform.from.value = result.from.name
                dl.changes.iwanttobetcform.from.selectedAirport = result.from
                dl.changes.iwanttobetcform.to.value = result.to.name
                dl.changes.iwanttobetcform.to.selectedAirport = result.to
                dl.changes.iwanttobetcform.bookedTicket.value =
                    result.ticketBooked
                dl.changes.iwanttobetcform.addStop.value = result.stops[0]
                    ? result.stops[0]
                    : ''
                dl.changes.iwanttobetcform.addStop2.value = result.stops[1]
                    ? result.stops[1]
                    : ''
                if (dl.changes.iwanttobetcform.addStop.value.length >= 1) {
                    ;(dl.changes.willBeATCstops.stop1 = 'flex'),
                        (dl.changes.willBeATCstops.stop2 = 'none'),
                        (dl.changes.willBeATCstops.addbutton = 'flex')
                    dl.changes.willBeATCstops.stopCount = 1
                }

                if (dl.changes.iwanttobetcform.addStop2.value.length >= 1) {
                    ;(dl.changes.willBeATCstops.stop1 = 'flex'),
                        (dl.changes.willBeATCstops.stop2 = 'flex'),
                        (dl.changes.willBeATCstops.addbutton = 'none')
                    dl.changes.willBeATCstops.stopCount = 2
                }

                dl.changes.iwanttobetcform.date.value = result.dateOfJourrneyISO
                dl.changes.iwanttobetcform.time.value = result.timeOfJourney
                dl.changes.iwanttobetcform.fromDate.value = result.fromDate
                dl.changes.iwanttobetcform.toDate.value = result.toDate
                dl.changes.iwanttobetcform.airline.value = result.airline
                dl.changes.iwanttobetcform.preferredAirline.value =
                    result.preferredAirline ? result.preferredAirline : ''
                dl.changes.iwanttobetcform.email.value = result.email
                dl.changes.iwanttobetcform.phone.value =
                    result.phone.substring(3)
                dl.changes.iwanttobetcform.phone.countryCodeValue =
                    result.phone.substring(0, 3)
                dl.changes.iwanttobetcform.languages.value =
                    result.languageKnown
                dl.changes.iwanttobetcform.vaccinated.value = result.vaccinated
                dl.changes.iwanttobetcform.tip.value = result.tip.substring(1)
            } else {
                dl.functions.viewsPlugin.showView('error')
            }
        } else {
            var userToken = dl.functions.common.getCookie('userToken')
            if (userToken) {
                dl.changes.iwanttobetcform.firstName.value =
                    dl.changes.userDetail.firstName
                dl.changes.iwanttobetcform.lastName.value =
                    dl.changes.userDetail.lastName
                dl.changes.iwanttobetcform.email.value =
                    dl.changes.userDetail.email
                if (dl.changes.userDetail.phone.length > 12) {
                    dl.changes.iwanttobetcform.phone.countryCodeValue = '+91'
                    dl.changes.iwanttobetcform.phone.value =
                        dl.changes.userDetail.phone.substring(3)
                } else {
                    dl.changes.iwanttobetcform.phone.countryCodeValue = '+1'
                    dl.changes.iwanttobetcform.phone.value =
                        dl.changes.userDetail.phone.substring(2)
                }
            }
        }
    }

    var onLoadFunctions = {
        home: homeOnLoad,
        blogs: blogsOnLoad,
        travelsuggestions: travelsuggestions,
        moviesuggestions: moviesuggestions,
        moviedetails: moviedetailsLOad,
        blogdetails: blogDetailsLoad,
        studyabroad: studyabroadLoad,
        faq: faqLoad,
        visaquestions: visaquestionsLoad,
        ridesharing: ridesharingLoad,
        ihavearide: ihavearideLoad,
        offeredride: offeredrideLoad,
        wantedride: wantedrideLoad,
        comments: visaQuestionCommentsLoad,
        rooms: roomsLoad,
        ihavearoom: ihavearoomLoad,
        homerentals: homerentalsLoad,
        ihaveahomerental: ihaveahomerentalLoad,
        offeredroomdetails: offeredroomdetailsLoad,
        wantedroomdetails: wantedroomdetailsLoad,
        offeredhomedetails: offeredhomedetailsLoad,
        wantedhomedetails: wantedhomedetailsLoad,
        profile: profileLoad,
        moviebookmarks: moviebookmarksLoad,
        rentalbookmarks: rentalbookmarksLoad,
        ridebookmarks: ridebookmarksLoad,
        travelcompanionbookmarks: travelcompanionbookmarksLoad,
        blogbookmarks: blogbookmarksLoad,
        questionbookmarks: questionbookmarksLoad,
        rentallistings: rentallistingsLoad,
        ridelistings: ridelistingsLoad,
        questionlistings: questionlistingsLoad,
        listmyroomform: listmyroomformLoad,
        ineedaroomform: ineedaroomformLoad,
        listmyhomeform: listmyhomeformformLoad,
        ineedahomeform: ineedahomeformLoad,
        ineedaride: ineedarideLoad,
        listmyride: listmyrideLoad,
        visabookings: visabookingsLoad,
        studyabroadbookings: studyabroadbookingsLoad,
        travelcompanion: travelcompanionLoad,
        iwanttobetravelcompanion: iwanttobetravelcompanionLoad,
        offeredtcdetails: offeredtcdetailsLoad,
        wantedtcdetails: wantedtcdetailsLoad,
        travelcompanionlisting: travelcompanionlistingLoad,
        ineedatravelcompanionform: ineedatravelcompanionformLoad,
        iwanttobetcform: iwanttobetcformLoad,
        visaslotbooking: () => {
            var date = new Date()
            dl.changes.visaQuestionSlotBookingForm.date.minDate = date
            var today = new Date()
            var maxdateraw = today.setDate(today.getDate() + 7)
            var maxDate = new Date(maxdateraw)
            dl.changes.visaQuestionSlotBookingForm.date.maxDate = maxDate
        },
        studyabroadslotpayment: () => {
            var date = new Date()
            dl.changes.studyAbroadPaymentForm.date.minDate = date
            var today = new Date()
            var maxdateraw = today.setDate(today.getDate() + 7)
            var maxDate = new Date(maxdateraw)
            dl.changes.studyAbroadPaymentForm.date.maxDate = maxDate
        },
    }
    dl.functions.onLoadFunctions = onLoadFunctions

    const home2CarouselScrollLeft = () => {
        let id = '1364:213'
        if (!document.getElementById(id)) {
            id = 't18_1364_213'
        }
        const container = document.getElementById(id)
        let currentIndex = Math.floor((container.scrollLeft + 10) / 1119)
        if (currentIndex > 0) {
            container.scroll({
                left: 1119 * (currentIndex - 1), // Scroll by 100 pixels horizontally
                behavior: 'smooth', // Smooth scrolling behavior
            })
        }
    }
    dl.functions.home2CarouselScrollLeft = home2CarouselScrollLeft

    const home2CarouselScrollRight = () => {
        let id = '1364:213'
        if (!document.getElementById(id)) {
            id = 't18_1364_213'
        }
        const container = document.getElementById(id)
        let currentIndex = Math.floor((container.scrollLeft + 10) / 1119)
        var position = 1119 * (currentIndex + 1)

        if (currentIndex >= 2) {
            position = 0
        }
        container.scroll({
            left: position, // Scroll by 100 pixels horizontally
            behavior: 'smooth', // Smooth scrolling behavior
        })
    }
    dl.functions.home2CarouselScrollRight = home2CarouselScrollRight

    const home1CarouselGoToIndex = (index) => {
        let id = '1365:247'
        if (!document.getElementById(id)) {
            id = 't18_1365_247'
        }
        const container = document.getElementById(id)

        var position = 1440 * index

        if (index > 2) {
            return
            position = 0
        }
        for (var i = 0; i < dl.changes.home1CarouselDotsColor.length; i++) {
            dl.changes.home1CarouselDotsColor[i] = '#fff'
        }
        dl.changes.home1CarouselDotsColor[index] = 'rgba(186,15,23,1)'
        container.scroll({
            left: position, // Scroll by 100 pixels horizontally
            behavior: 'smooth', // Smooth scrolling behavior
        })
    }

    dl.functions.home1CarouselGoToIndex = home1CarouselGoToIndex

    const getAddSpace = async () => {
        var myHeaders = new Headers()
        var userToken = dl.functions.common.getCookie('userToken')
        myHeaders.append('Authorization', userToken)

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow',
        }

        try {
            var baseUrl = process.env.BASE_URL
            const response = await fetch(
                // 'https://melody-mocktail-6tjz.api.neutrodev.com/user/adspaces',
                `${baseUrl}/user/adspaces`,
                requestOptions
            )
            let res = await response.json()

            if (response.status == 200) {
                var adds = {}
                dl.changes.appSettings = res.settings
                // res = res[0].adSpaces

                for (var i = 0; i < res.length; i++) {
                    adds[res[i].name] = {
                        lg: 'url(' + res[i].urls.lg + ')',
                        md: 'url(' + res[i].urls.md + ')',
                        sm: 'url(' + res[i].urls.sm + ')',
                        xs: 'url(' + res[i].urls.xs + ')',
                        redirectURL: res[i].redirectUrl
                            ? res[i].redirectUrl
                            : 'https://www.melodymocktail.com/home',
                    }
                    var exceptions = ['HomeMain1', 'HomeMain2', 'HomeMain3']
                    if (exceptions.includes(res[i].name)) {
                        adds[res[i].name] = {
                            lg: { imageUrl: 'url(' + res[i].urls.lg + ')' },
                            md: { imageUrl: 'url(' + res[i].urls.md + ')' },
                            sm: { imageUrl: 'url(' + res[i].urls.sm + ')' },
                            xs: { imageUrl: 'url(' + res[i].urls.xs + ')' },
                            redirectURL: res[i].redirectUrl
                                ? res[i].redirectUrl
                                : 'https://www.melodymocktail.com/homee',
                        }
                    }
                }
                dl.changes.addSpaces = adds
            }
        } catch (err) {
            return err
        }
    }
    dl.functions.getAddSpace = getAddSpace

    const submitHomeForm = async () => {
        var res = dl.functions.validateHomeForm()

        if (res == true) {
            dl.functions.modalsPlugin.openModal('loading')
            var body = {
                rentalType: 'Home',
                type: dl.changes.iHaveAhomeForm.type.value,
                exactAddress: dl.changes.iHaveAhomeForm.address.value,
                zipCode: dl.changes.iHaveAhomeForm.zipCode.value,
                stayLeaseType: dl.changes.iHaveAhomeForm.leaseType.value,
                availabilityFrom: dl.changes.iHaveAhomeForm.availableFrom.value,
                availabilityTo: dl.changes.iHaveAhomeForm.availableTo.value,
                preferedRent: dl.changes.iHaveAhomeForm.preferredRent.value,
                priceMode: dl.changes.iHaveAhomeForm.priceMode.value,
                noOfPeople: dl.changes.iHaveAhomeForm.type.value,
                utilities: dl.changes.iHaveAhomeForm.utilities.value,
                roomFurnishingRequired:
                    dl.changes.iHaveAhomeForm.furnishing.value,
                amenities: dl.changes.iHaveAhomeForm.amenities.value,
                smokingPolicy: dl.changes.iHaveAhomeForm.smokingPolicy.value,
                petFriendly: dl.changes.iHaveAhomeForm.petFriendly.value,
                occupation: dl.changes.iHaveAhomeForm.occupation.value,
                title: dl.changes.iHaveAhomeForm.title.value,
                description: dl.changes.iHaveAhomeForm.description.value,
                name: dl.changes.iHaveAhomeForm.name.value,
                email: dl.changes.iHaveAhomeForm.email.value,
                contactNumber:
                    dl.changes.iHaveAhomeForm.phone.selectPlaceHolder +
                    dl.changes.iHaveAhomeForm.phone.value,
            }

            var params = dl.functions.common.getParams()
            var homeId = params.homeId
            var mode = params.mode
            if (homeId) {
                if (mode == 'edit') {
                    var images = []
                    var imagevalue = dl.changes.iHaveAhomeForm.photos.value
                    for (var i = 0; i < imagevalue.length; i++) {
                        if (imagevalue[i].file) {
                            var uploadedimage =
                                await dl.functions.common.neutrodev.generateAndUpload(
                                    imagevalue[i].file,
                                    false,
                                    'OdocRewT1nf/GhB3RCq1Xg=='
                                )
                            images.push(uploadedimage)
                        } else {
                            images.push({
                                url: imagevalue[i].url,
                                secure: imagevalue[i].secure,
                            })
                        }
                    }
                    body['files'] = images

                    body['id'] = homeId
                    var res = await dl.functions.updateHomeRental(body)
                    if (res == 200) {
                        dl.functions.viewsPlugin.showView('rentallistings')
                        dl.functions.getHomeListing('6', '1')
                        // dl.changes.selectedListingrentelType = "Home rentals";
                        dl.changes.selectedListingType = 'Offered'
                        window.toast('You have sucessfully Edited Your Listing')
                    }
                    dl.functions.modalsPlugin.closeModal('loading')
                }
            } else {
                var images = []
                var imagevalue = dl.changes.iHaveAhomeForm.photos.value
                for (var i = 0; i < imagevalue.length; i++) {
                    var uploadedimage =
                        await dl.functions.common.neutrodev.generateAndUpload(
                            imagevalue[i].file,
                            false,
                            'OdocRewT1nf/GhB3RCq1Xg=='
                        )
                    images.push(uploadedimage)
                }
                body['files'] = images
                body['Age'] = Number(dl.changes.iHaveAhomeForm.age.value)

                var res2 = await dl.functions.createHomeRental(body)
                if (res2.status == 200) {
                    dl.functions.modalsPlugin.closeModal('loading')
                    window.toast('Your Room has been Posted')
                }
            }
        }
    }

    dl.functions.submitHomeForm = submitHomeForm

    function getTimeRange(hour) {
        if (hour < 0 || hour > 23) {
            return 'Invalid hour'
        }

        let startHour
        let endHour
        let period

        if (hour === 0) {
            startHour = 12
            endHour = 1
            period = 'AM'
        } else if (hour === 12) {
            startHour = 12
            endHour = 1
            period = 'PM'
        } else if (hour === 23) {
            startHour = 11
            endHour = 12
            period = 'PM'
        } else {
            startHour = hour % 12 || 12
            endHour = (hour + 1) % 12 || 12
            period = hour < 12 ? 'AM' : 'PM'
        }

        return `${startHour}${period} - ${endHour}${period}`
    }

    dl.functions.getTimeRange = getTimeRange

    const setServiceSelector = (viewName) => {
        var currentPath = viewName
            ? viewName
            : dl.functions.common.getLastPath()
        var serviceSelector = dl.changes.serviceSelector.services
        var serviceSelectorMini = dl.changes.serviceSelectorMini.services

        for (var key in serviceSelector) {
            serviceSelector[key] = 'rgba(186,15,23,1)'
        }

        for (var key in serviceSelectorMini) {
            serviceSelectorMini[key]['borderColor'] = 'rgba(207,206,206,1)'
            serviceSelectorMini[key]['fontColor'] = 'rgba(113,113,113,1)'
        }

        if (currentPath.includes('bookmarks')) {
            serviceSelectorMini['travelSuggestions']['text'] = 'Blogs'
            serviceSelectorMini['studyAbroad']['display'] = 'none'
            serviceSelectorMini['taxServices']['display'] = 'none'
        } else {
            serviceSelectorMini['travelSuggestions']['text'] =
                'Travel Suggestions'
            serviceSelectorMini['studyAbroad']['display'] = 'flex'
            serviceSelectorMini['taxServices']['display'] = 'flex'
        }

        if (
            currentPath == 'travelsuggestions' ||
            currentPath == 'blogbookmarks'
        ) {
            serviceSelector['travelSuggestions'] = 'rgba(156,18,24,1)'

            serviceSelectorMini['travelSuggestions']['borderColor'] =
                'rgba(186,15,23,1)'
            serviceSelectorMini['travelSuggestions']['fontColor'] =
                'rgba(186,15,23,1)'
        } else if (
            currentPath == 'travelcompanion' ||
            currentPath == 'iwanttobetravelcompanion' ||
            currentPath == 'travelcompanionbookmarks'
        ) {
            serviceSelector['travelCompanion'] = 'rgba(156,18,24,1)'
            serviceSelectorMini['travelCompanion']['borderColor'] =
                'rgba(186,15,23,1)'
            serviceSelectorMini['travelCompanion']['fontColor'] =
                'rgba(186,15,23,1)'
        } else if (
            currentPath == 'ihaveahomerental' ||
            currentPath == 'rentalbookmarks'
        ) {
            serviceSelector['rentals'] = 'rgba(156,18,24,1)'
            serviceSelectorMini['rentals']['borderColor'] = 'rgba(186,15,23,1)'
            serviceSelectorMini['rentals']['fontColor'] = 'rgba(186,15,23,1)'
        } else if (currentPath == 'homerentals') {
            serviceSelector['rentals'] = 'rgba(156,18,24,1)'
            serviceSelectorMini['rentals']['borderColor'] = 'rgba(186,15,23,1)'
            serviceSelectorMini['rentals']['fontColor'] = 'rgba(186,15,23,1)'
        } else if (currentPath == 'ihavearoom') {
            serviceSelector['rentals'] = 'rgba(156,18,24,1)'
            serviceSelectorMini['rentals']['borderColor'] = 'rgba(186,15,23,1)'
            serviceSelectorMini['rentals']['fontColor'] = 'rgba(186,15,23,1)'
        } else if (currentPath == 'rooms') {
            serviceSelector['rentals'] = 'rgba(156,18,24,1)'
            serviceSelectorMini['rentals']['borderColor'] = 'rgba(186,15,23,1)'
            serviceSelectorMini['rentals']['fontColor'] = 'rgba(186,15,23,1)'
        } else if (
            currentPath == 'ridesharing' ||
            currentPath == 'ihavearide' ||
            currentPath == 'ridebookmarks'
        ) {
            serviceSelector['rides'] = 'rgba(156,18,24,1)'
            serviceSelectorMini['rides']['borderColor'] = 'rgba(186,15,23,1)'
            serviceSelectorMini['rides']['fontColor'] = 'rgba(186,15,23,1)'
        } else if (
            currentPath == 'visaquestions' ||
            currentPath == 'faq' ||
            currentPath == 'questionbookmarks'
        ) {
            serviceSelector['visaQna'] = 'rgba(156,18,24,1)'
            serviceSelectorMini['visaQna']['borderColor'] = 'rgba(186,15,23,1)'
            serviceSelectorMini['visaQna']['fontColor'] = 'rgba(186,15,23,1)'
        } else if (currentPath == 'studyabroad') {
            serviceSelector['studyAbroad'] = 'rgba(156,18,24,1)'
            serviceSelectorMini['studyAbroad']['borderColor'] =
                'rgba(186,15,23,1)'
            serviceSelectorMini['studyAbroad']['fontColor'] =
                'rgba(186,15,23,1)'
        } else if (
            currentPath == 'moviesuggestions' ||
            currentPath == 'moviebookmarks'
        ) {
            serviceSelector['movieSuggestions'] = 'rgba(156,18,24,1)'

            serviceSelectorMini['movieSuggestions']['borderColor'] =
                'rgba(186,15,23,1)'
            serviceSelectorMini['movieSuggestions']['fontColor'] =
                'rgba(186,15,23,1)'
        }
    }
    setServiceSelector()

    const preShowView = (viewName) => {
        dl.functions.resetAllFilters()

        if (viewName == 'home') {
            dl.functions.startCarousel()

            dl.changes.userDetail.otherServicesVisible = 'flex'
        } else {
            dl.changes.userDetail.otherServicesVisible = 'none'
        }

        setServiceSelector(viewName)
    }

    dl.functions.preShowView = preShowView

    const startCarousel = () => {
        clearInterval(dl.changes.carouselInterval)

        dl.changes.carouselInterval = setInterval(() => {
            dl.functions.home2CarouselScrollRight()
            let currentIndex =
                dl.changes.home1CarouselDotsColor.indexOf('rgba(186,15,23,1)')
            if (currentIndex == -1) {
                return
            }
            if (currentIndex == 2) {
                currentIndex = 0
            } else {
                currentIndex = currentIndex + 1
            }
            dl.functions.home1CarouselGoToIndex(currentIndex)
        }, 8000)
    }

    dl.functions.startCarousel = startCarousel

    const submitReport = async () => {
        let obj = dl.changes.reportForm
        obj.phone =
            dl.changes.reportForm.countryCode + dl.changes.reportForm.phone

        delete obj.countryCode

        var userToken = dl.functions.common.getCookie('userToken')

        var myHeaders = new Headers()
        myHeaders.append('Authorization', userToken)
        myHeaders.append('Content-Type', 'application/json')

        var raw = JSON.stringify(obj)

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
        }

        dl.functions.modalsPlugin.openModal('loading')
        var baseUrl = process.env.BASE_URL
        let res = await fetch(
            // 'https://melody-mocktail-6tjz.api.neutrodev.com/user/report',
            `${baseUrl}/user/report`,
            requestOptions
        )

        dl.functions.modalsPlugin.closeModal('loading')
        dl.functions.modalsPlugin.closeModal('reportacommentLg')
        dl.functions.modalsPlugin.closeModal('reportacommentS')
    }

    dl.functions.submitReport = submitReport

    var currentPath = dl.functions.common.getLastPath()
    currentPath = currentPath.toLowerCase()
    if (currentPath == 'home') {
        dl.functions.startCarousel()

        dl.changes.userDetail.otherServicesVisible = 'flex'
    } else {
        dl.changes.userDetail.otherServicesVisible = 'none'
    }
    dl.changes.paginationState.total = 1
    dl.changes.paginationState.active = 1
    var userToken = dl.functions.common.getCookie('userToken')

    const defaultLoad = async () => {
        dl.functions.checkUser()
        dl.functions.getAddSpace()
        await dl.functions.getUserDetail()
        if (dl.changes.userDetail.status != 'active') {
            dl.functions.viewsPlugin.showView('accountblocked')
        }
        var todaysDate = new Date()
        dl.changes.todaysDate = todaysDate

        if (dl.changes.userDetail.address.length < 5) {
            dl.functions.viewsPlugin.showView('address')
        }
        if (onLoadFunctions[currentPath]) {
            onLoadFunctions[currentPath]()
        }
    }

    defaultLoad()

    const selectVisaBookingSessionType = async (stype) => {
        dl.changes.visaQuestionSlotBookingForm.session.value = stype
        dl.changes.visaQuestionSlotBookingForm.session.showErrorMessage = 'none'
        dl.changes.visaQuestionSlotBookingForm.session.inputBorderColor =
            'rgba(207,206,206,1)'

        dl.changes.visaBookingPricing =
            '$' +
            dl.changes.appSettings.pricing.slotBooking.visaQna[
                stype.toLowerCase()
            ].usd
        if (
            dl.changes.visaQuestionSlotBookingForm.date.value != '' &&
            dl.changes.visaQuestionSlotBookingForm.session.value != ''
        ) {
            var res = await dl.functions.getvisaQuestionTimeSlot()
            if (res == 200) {
                let slots = dl.changes.availableSlots
                for (var i = 0; i < slots.length; i++) {
                    let obj = {
                        slot: slots[i],
                        showActive: 'none',
                        showInActive: 'flex',
                        value: dl.functions.getTimeRange(slots[i]),
                    }
                    options.push(obj)
                }
                dl.changes.visaQuestionSlotBookingForm.timeSlot.options =
                    options
            }
        }
    }
    dl.functions.selectVisaBookingSessionType = selectVisaBookingSessionType

    const selectSaBookingType = async (stype) => {
        dl.changes.studyAbroadPaymentForm.session.value = stype
        dl.changes.studyAbroadPaymentForm.session.showErrorMessage = 'none'
        dl.changes.studyAbroadPaymentForm.session.inputBorderColor =
            'rgba(207,206,206,1)'
        dl.changes.saBookingPricing =
            '$' +
            dl.changes.appSettings.pricing.slotBooking.studyAbroad[
                stype.toLowerCase()
            ].usd

        if (
            dl.changes.studyAbroadPaymentForm.date.value != '' &&
            dl.changes.studyAbroadPaymentForm.session.value != ''
        ) {
            var res = await dl.functions.getTimeSlot()
            if (res == 200) {
                dl.changes.studyAbroadPaymentForm.timeSlot.options =
                    dl.changes.availableSlots
            }
        }
    }
    dl.functions.selectSaBookingType = selectSaBookingType

    const submitListMyRoomForm = async () => {
        var res = dl.functions.validateRoomForm()

        if (res == true) {
            dl.functions.modalsPlugin.openModal('loading')
            var body = {
                rentalType: 'Room',
                type: dl.changes.iHaveAroomForm.type.value,
                exactAddress: dl.changes.iHaveAroomForm.address.value,
                zipCode: dl.changes.iHaveAroomForm.zipCode.value,
                stayLeaseType: dl.changes.iHaveAroomForm.leaseType.value,
                availabilityFrom: dl.changes.iHaveAroomForm.availableFrom.value,
                availabilityTo: dl.changes.iHaveAroomForm.availableTo.value,
                noOfPeople: dl.changes.iHaveAroomForm.noOfPeople.value,
                attachedBath:
                    dl.changes.iHaveAroomForm.attatchedBath.value == 'Yes'
                        ? true
                        : false,
                preferedGender: dl.changes.iHaveAroomForm.gender.value,
                preferedRent: dl.changes.iHaveAroomForm.rent.value,
                priceMode: dl.changes.iHaveAroomForm.priceMode.value,
                negotiable: dl.changes.iHaveAroomForm.negotiable.value,
                utilityRequired: true,
                utilities: dl.changes.iHaveAroomForm.utilities.value,
                roomFurnishingRequired:
                    dl.changes.iHaveAroomForm.furnishing.value,
                amenities: dl.changes.iHaveAroomForm.amenities.value,
                vegPreference: dl.changes.iHaveAroomForm.vegPreference.value,
                smokingPolicy: dl.changes.iHaveAroomForm.smokingPolicy.value,
                petFriendly: dl.changes.iHaveAroomForm.petFriendly.value,

                occupation: dl.changes.iHaveAroomForm.occupation.value,
                languages: dl.changes.iHaveAroomForm.languages.value,
                title: dl.changes.iHaveAroomForm.title.value,
                description: dl.changes.iHaveAroomForm.description.value,
                name: dl.changes.iHaveAroomForm.name.value,
                email: dl.changes.iHaveAroomForm.email.value,
                contactNumber:
                    dl.changes.iHaveAroomForm.phone.selectPlaceHolder +
                    dl.changes.iHaveAroomForm.phone.value,
            }
            var params = dl.functions.common.getParams()
            var roomId = params.roomId
            var mode = params.mode
            if (roomId) {
                if (mode == 'edit') {
                    var images = []
                    var imagevalue = dl.changes.iHaveAroomForm.photos.value
                    for (var i = 0; i < imagevalue.length; i++) {
                        if (imagevalue[i].file) {
                            var uploadedimage =
                                await dl.functions.common.neutrodev.generateAndUpload(
                                    imagevalue[i].file,
                                    false,
                                    'OdocRewT1nf/GhB3RCq1Xg=='
                                )
                            images.push(uploadedimage)
                        } else {
                            images.push({
                                url: imagevalue[i].url,
                                secure: imagevalue[i].secure,
                            })
                        }
                    }
                    if (images.length < 2) {
                        return
                    }
                    body['files'] = images

                    body['id'] = roomId
                    body['files'] = images
                    body['noOfPeople'] =
                        dl.changes.iHaveAroomForm.noOfPeople.value
                    body['Age'] = dl.changes.iHaveAroomForm.age.value

                    var res = await dl.functions.updateRooms(body)
                    if (res == 200) {
                        dl.functions.viewsPlugin.showView('rentallistings')
                        dl.functions.getRoomListing('6', '1')
                        window.toast(
                            'You have successfully Edited Your Listing'
                        )
                    }
                    dl.functions.modalsPlugin.closeModal('loading')
                }
            } else {
                var images = []
                var imagevalue = dl.changes.iHaveAroomForm.photos.value
                for (var i = 0; i < imagevalue.length; i++) {
                    var uploadedimage =
                        await dl.functions.common.neutrodev.generateAndUpload(
                            imagevalue[i].file,
                            false,
                            'OdocRewT1nf/GhB3RCq1Xg=='
                        )
                    images.push(uploadedimage)
                }
                body['files'] = images

                body['Age'] = Number(dl.changes.iHaveAroomForm.age.value)
                console.log(JSON.stringify(body))
                var res2 = await dl.functions.createRoom(body)
                if (res2.status == 200) {
                    window.toast('Your Room has been Posted')
                }
                window.toast('Your Room has ben Posted')
                dl.functions.modalsPlugin.closeModal('loading')
            }
        }
    }
    dl.functions.submitListMyRoomForm = submitListMyRoomForm

    const resetFilter = (key) => {
        const filter = key

        for (let j = 0; j < dl.changes[filter].length; j++) {
            for (let k = 0; k < dl.changes[filter][j].options.length; k++) {
                dl.changes[filter][j].options[k].selected = false
            }
        }

        dl.changes.universalFiltersList = []
    }
    dl.functions.resetFilter = resetFilter

    const resetAllFilters = () => {
        let filters = [
            'travelComapanionFilter',
            'rideSharingFilter',
            'offeredroomFilter',
            'wantedroomFilter',
            'offeredHomeFilter',
            'needAHomeFilter',
            'visaFilter',
            'blogsFilter',
            'moviesFilter',
            'travelSuggestionFilters',
        ]

        for (let i = 0; i < filters.length; i++) {
            const filter = filters[i]

            for (let j = 0; j < dl.changes[filter].length; j++) {
                for (let k = 0; k < dl.changes[filter][j].options.length; k++) {
                    dl.changes[filter][j].options[k].selected = false
                }
            }
        }

        dl.functions.removeUniversalFilter()

        dl.changes.paginationState.active = 1
        dl.changes.paginationState.total = 1

        let emptyListObj = [
            'rideSharingListingNoDataVisible',
            'rentelNodataVisible',
            'tcListingNoDataVisible',
            'needATCNoDataVisible',
            'wantToBeTCNoDataVisible',
            'bookingNoDataVisible',
            'bookmarkNodataVisible',
            'rentelistingNoDataVisible',
            'haveARideNoDataVisible',
            'rideSharingNoDataVisible',
        ]

        let emptyListVal = [
            'visaQuestionListingNoDataVisible',
            'studyAbroadNoDataVisible',
            'visaFaqNoDataVisible',
            'visaQuestionNoDataVisible',
            'blogNoDataVisible',
            'moviesNoDataVisible',
            'travelNoDataVisible',
        ]

        for (let i = 0; i < emptyListObj.length; i++) {
            const element = emptyListObj[i]
            dl.changes[element].display = 'none'
        }
        for (let i = 0; i < emptyListVal.length; i++) {
            const element = emptyListVal[i]
            dl.changes[element] = 'none'
        }

        dl.changes.universalFiltersList = []
    }

    dl.functions.resetAllFilters = resetAllFilters
    dl.functions.resetAllFilters()

    window.addEventListener('popstate', function (event) {
        var currentPath = dl.functions.common.getLastPath()
        dl.functions.preShowView(currentPath)
    })

    const getQuestionSuggestion = async () => {
        // const myHeaders = new Headers();
        // var userToken = dl.functions.common.getCookie('userToken')
        // myHeaders.append('Authorization', userToken)

        // const requestOptions = {
        // method: "GET",
        // headers: myHeaders,
        // redirect: "follow"
        // };

        const myHeaders = new Headers()
        myHeaders.append('Content-Type', 'application/json')

        const raw = JSON.stringify({
            original: dl.changes.visaQuestionInput.question,
        })

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
        }

        try {
            var baseUrl = process.env.BASE_URL
            dl.changes.showAILoader = true
            dl.changes.showAIoptions = true

            const response = await fetch(
                // `${baseUrl}/suggestion?question=${dl.changes.visaQuestionInput.question}`,
                'https://mai.melodymocktail.com/genai/',
                requestOptions
            )
            const res = await response.json()
            if (response.status == 200) {
                if (res.suggestion) {
                    dl.changes.aiVisaQuestionSuggestionText = res.suggestion
                    dl.changes.showvisaQuestionSuggestion = true
                    dl.changes.showAILoader = false
                }
            }
        } catch (err) {
            console.log('err: ' + err)
        }
    }
    dl.functions.getQuestionSuggestion = getQuestionSuggestion
}

export default onLoad
