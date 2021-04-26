import React from 'react'
// @ts-ignore
import swal from '@sweetalert/with-react'

export const CustomAlertFunction = (warning: string, success: string, user: boolean, team: boolean) => {
  const error1 = '400'
  const error2 = '401'
  const error3 = '409'
  const error4 = '500'
  const serverMessage = 'Request failed with status code '
  swal({
      content: (
        <div className={'forSweetAlert'}>
          {
            warning === serverMessage + error1
              ? 'Bad Request'
              : ''
              ||
              warning === serverMessage + error2
              ? `User with the specified username / password was not found`
              : '' ||
              warning === serverMessage + error3
                ? `${user
                  ? 'User'
                  : team
                    ? 'Team'
                    : 'Player'} with the specified ${user
                  ? 'login'
                  : 'name'} is already exist`
                : '' ||
                warning === serverMessage + error4 ?
                  'You must to delete all players before team deletion'
                  : '' ||
                warning ||
                success
          }
        </div>
      ),
      timer: 1500,
      buttons: false,
      className: success ? 'successAlert' : 'warningAlert'
    }
  )
}