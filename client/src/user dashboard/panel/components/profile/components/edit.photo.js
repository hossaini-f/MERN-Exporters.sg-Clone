import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './statics/style.css';
import Profile from './statics/icons/profile.png';
import {updateProfile} from '../.././../../../actions/v1/admin.profile';

const EditProfilePhoto = () => {
    const dispatch = useDispatch();
    const [display, setDisplay] = useState(true);
    const [file, setFile] = useState({file: null});
    const profileId = JSON.parse(localStorage.getItem("profile")).result.id;
    const fetchData = useSelector((state) => state.Profile);
    const [uploadedSize, setUploadedSize] = useState('0');
    const [fileSize, setFileSize] = useState('0');
    const [uploadedPercent, setUploadedPercent] = useState('0');

    const setForm = (e) => {
            setFile({file: e.target.files[0]});
    }
    useEffect(() => {
        const options = {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            onUploadProgress: (progressEvent) => {
                const {loaded, total} = progressEvent;
                const fileSizeInMegaBytes = (total / (1024 * 1024)).toFixed(2);
                const fileLoadedInMegaBytes = (loaded / (1024 * 1024)).toFixed(2);

                let percent = Math.floor((loaded * 100) / total);
                setFileSize(fileSizeInMegaBytes)
                setUploadedSize(fileLoadedInMegaBytes)
                setUploadedPercent(percent)
                // console.log(`${fileLoadedInMegaBytes}MB of ${fileSizeInMegaBytes}MB | ${percent}%`);
            }
        };
        const formData = new FormData();
        formData.append('file', file.file);
        
        if(file.file !== null){
            dispatch(updateProfile(profileId, formData, options));
            
        }else{
            console.log("null")
        }

    }, [file])

    return(
        <>
            <div id="back-wrapper-p" class={display ? "show-message" : "hide-message"}></div>
            <div id="pro-container-g" class={display ? "show-message" : "hide-message"}>
                <table cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                        <tr>
                            <td><a>Change Logo</a></td>
                            <td><div onClick={() =>{setDisplay(false)}}>X</div></td>
                        </tr>
                    </tbody>
                </table>
                <div id="epp-cont-1">
                    <ol type="1">
                        <li>Only <b>JPEG, GIF, BMP or PNG</b> images are allowed.</li>
                        <li>Picture file size <b>not more than 2MB</b>.</li>
                        <li>Your logo will be removed if it does not comply to our Terms of Service.</li>
                    </ol>
                </div>
                <div id="epp-cont-2">
                    <div>Your Company Logo:</div>
                    <div>
                        <div id="image-frame-d">
                        {fetchData.advanceInfo && fetchData.advanceInfo.advance.logo
                                ?
                                <img src={fetchData.advanceInfo.advance.logo} type="image/*" width="154px"/>
                                :
                                <img src={Profile} type="image/*" width="154px"/>
                        }
                        </div>
                        <div id="form-cont-3de">
                            <div>Click Browse to upload picture:</div>
                            
                            <div>
                                <form>
                                   <input type="file" id="image" name="image" onChange={setForm} />
                                    <label for="image" >Browse</label>
                                </form>
                                {uploadedPercent > 0 
                                ?
                                    <>
                                        <div style={{
                                            fontFamily:"verdana",color:"#666", 
                                            fontSize:"12px",
                                            marginTop:"20px",
                                            }}>{ uploadedPercent === 100 ? <span style={{color:'green'}}> Uploaded </span> : "Uploading..."}</div>
                                        <div style={{
                                            backgroundColor:"#079", 
                                            fontFamily:"verdana",color:"#fff", 
                                            fontSize:"12px",
                                            marginTop:"2px",
                                            padding:"5px"
                                            }}>
                                            {uploadedSize}MB of {fileSize}MB &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {uploadedPercent}%
                                        </div>
                                    </>
                                :
                                    null
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default EditProfilePhoto;