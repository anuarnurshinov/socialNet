import {
  Typography,
  CardContent,
  CardActions,
  Button,
  Card,
  Grid,
} from "@mui/material"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { UserPageHeadType } from "./UsersPageContainer"

import UserAvatar from "../common/UserAvatar"
import { IUser } from "./TypesForUserPage"
import SendIcon from "@mui/icons-material/Send"

const UsersPage: React.FC<UserPageHeadType> = ({ users, getAllUsersThunk }) => {
  useEffect(() => {
    getAllUsersThunk()
  }, [])
  const navigate = useNavigate()
  const onClickNavigateToUser = (id: number) => {
    navigate(`/users/${id}`)
  }

  return (
    <Grid container spacing={2} rowGap={4}>
      {users.map((item: IUser) => (
        <Grid key={item.id} item>
          <Card sx={{ boxShadow: 3 }}>
            <CardContent>
              <Grid container spacing={1}>
                <Grid item>
                  {" "}
                  <UserAvatar userId={item.id} />
                </Grid>
                <Grid item>
                  <Typography>{item.email}</Typography>
                  <Typography>
                    {" "}
                    {item.name} {item.surname}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
            <CardActions sx={{ p: 2 }}>
              <Button
                variant="contained"
                size="small"
                onClick={() => {
                  onClickNavigateToUser(item.id)
                }}
              >
                Перейти
              </Button>
              <Button variant="contained" size="small">
                <SendIcon />
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default UsersPage
