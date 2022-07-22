SELECT * FROM database.users as u 
INNER JOIN database.user_assets as ua on u.id = ua.id_user
INNER JOIN database.assets as a on ua.id_asset = a.id;