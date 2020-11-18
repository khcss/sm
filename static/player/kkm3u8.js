var nexturl = macplay.nexturl;
MacPlayer.Html = '<iframe width="100%" height="' + MacPlayer.Height + '" class="embed-responsive-item" src="https://dplayer.alicdncss.com:8521/m3u8.php?url=' + MacPlayer.PlayUrl + '&jump='+nexturl+'" frameborder="0" border="0" marginwidth="0" marginheight="0" scrolling="no"  allowfullscreen="true"></iframe>';
MacPlayer.Show();
