import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getReviewsByIsApproved } from '../../redux/actions/reviewActions'
import { useEffect } from 'react'
import ReviewCard from './ReviewCard'
import SwiperItems from '../SwiperItems'


const Reviews = () => {
  const dispatch = useDispatch()
  const { reviewsByIsApproved } = useSelector((state) => state.reviewReducer)

  useEffect(() => {
    dispatch(getReviewsByIsApproved())
  }, [dispatch])



  return (
    <div className="container" dir="rtl">
      {reviewsByIsApproved.length > 0 && (
        <>
          <h1 className="text-right mb-4">מה אומרים עלינו?</h1>
          <SwiperItems items={reviewsByIsApproved} renderItems={(item) => (
            <ReviewCard key={item?._id} userName={item?.userName} rating={item?.rating} content={item?.content} />
          )} />
        </>
      )}
    </div>
  )
}

export default Reviews;