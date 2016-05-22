from flask import Blueprint, current_app as app

blueprint = Blueprint('prefix_uri', __name__)

@blueprint.route('/users/<username>', methods=['DELETE'])
def del_med(pzn):
	# curl this with correct pzn
    # https://arzneimittel.aok.de/medikament-detailinformationen.60.de.html?amn[pzn]=00078597
	# parse it to json
    # call Eve-hooks consumers for this  event
    getattr(app, "get_meded")(pzn)
