import { request } from 'graphql-request'

// dispatch
import { Dispatch } from 'redux'
import { Action } from '../action-types/joinTeam'

// types
import { JoinTeamTypes } from '../models/JoinTeam'

import { API_URL } from './config'

export const LoadJoinTeam = () => async (dispatch: Dispatch<Action>) => {
    dispatch({ type: JoinTeamTypes.JOINTEAM_LOADING, payload: true })

    try {
        const { joinTeams } = await request(
            API_URL,
            `
            {
                joinTeams(last: 1) {
                  id
                  title
                  description
                  skills
                  behaviors
                }
              }
              
            `
        )

        if (joinTeams && joinTeams.length > 0) {
            dispatch({
                type: JoinTeamTypes.JOINTEAM_LOADED,
                payload: joinTeams.at(-1),
            })
        } else {
            throw new Error('JoinTeam Not Found')
        }
    } catch (error) {
        dispatch({
            type: JoinTeamTypes.JOINTEAM_ERROR,
            payload: 'Error to load JoinTeam',
        })
    }

    dispatch({ type: JoinTeamTypes.JOINTEAM_LOADING, payload: false })
}
