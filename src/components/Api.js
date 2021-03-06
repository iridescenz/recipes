import React, { useEffect, useReducer, useState } from 'react';


function useAuth() {
    let [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case 'LOADING': {
        return { ...state, loading: true }
      }
      case 'RESOLVED': {
        return {
          ...state,
          loading: false,
          response: action.response,
          error: null
        }
      }
      case 'ERROR': {
        return {
          ...state,
          loading: false,
          response: null,
          error: action.error
        }
      }
      default:
        return state
    }
  }, {
    loading: false,
    response: null,
    error: null
  })
  
  useEffect(() => {
    let isCurrent = true
    dispatch({ type: "LOADING" })
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {
        if (isCurrent) {
          dispatch({ type: "RESOLVED", response: json })
        }
      }).catch(error => {
        dispatch({ type: "ERROR", error })
      })
    return () => {
      isCurrent = false
    }
  }, [])
  
  return [state.loading, state.response, state.error]
}

const Api = () => {
  let [ loading, response, error ] = useAuth()
  
  return (
    <section>

    </section>
  )
}
export default Api