#!/usr/bin/env python3

#! Internal imports
from app_config import app, api
from routes.user.users import Users, UserResource
from routes.auth.login import Login
from routes.auth.logout import Logout
from routes.auth.check_session import CheckSession
from routes.auth.refresh import Refresh
from routes.card.cards import CardsAPI
from routes.transaction.transaction import TransactionResource, TransactionTotal
from routes.usercard.user_card import UserCardResource, UserCardItemResource, UserCardValueResource



api.add_resource(CardsAPI, '/cards')
api.add_resource(Users, "/signup")
api.add_resource(Login, "/login")
api.add_resource(Logout, "/logout")
api.add_resource(CheckSession, "/me")
api.add_resource(Refresh, "/refresh")
api.add_resource(UserCardResource, '/user-cards')
api.add_resource(UserCardItemResource, '/user-cards/<int:user_card_id>')
api.add_resource(UserCardValueResource, '/user-cards/value')
api.add_resource(TransactionResource, '/transactions')
api.add_resource(UserResource, '/users/<int:user_id>')
api.add_resource(TransactionTotal, '/transactions/value')
if __name__ == "__main__":
    app.run(port=5555, debug=True)
