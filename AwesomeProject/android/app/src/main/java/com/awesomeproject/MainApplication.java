package com.awesomeproject;

import android.app.Application;
import android.util.Log;

import com.facebook.react.ReactApplication;
import com.inprogress.reactnativeyoutube.ReactNativeYouTube;
import com.horcrux.svg.SvgPackage;
import com.rnopentok.RNOpenTokPackage;
import org.reactnative.camera.RNCameraPackage;
import com.opentokreactnative.OTPackage;
import com.horcrux.svg.SvgPackage;
import com.inprogress.reactnativeyoutube.ReactNativeYouTube;
import com.reactlibrary.RNOpenCvLibraryPackage;
import com.rnopentok.RNOpenTokPackage;

import org.opencv.android.BaseLoaderCallback;
import org.opencv.android.LoaderCallbackInterface;
import org.opencv.android.OpenCVLoader;
import org.reactnative.camera.RNCameraPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new ReactNativeYouTube(),
            new RNCameraPackage(),
            new OTPackage(),
            new SvgPackage(),
            new RNOpenTokPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);

    if(!OpenCVLoader.initDebug()){
        Log.d("OpenCv", "Error while init");
    }
  }

  public void onResume()
  {
      if(!OpenCVLoader.initDebug()) {
          Log.d("OpenCV", "Internal OpenCV library not found, Using OpenCV manager for initialization");
          OpenCVLoader.initAsync(OpenCVLoader.OPENCV_VERSION_3_0_0, this, mLoaderCallback);
      }
      else{
          Log.d("OpenCV", "OpenCV library found inside package. Using it!");
          mLoaderCallback.onManagerConnected(LoaderCallbackInterface.SUCCESS);
      }
  }

  private BaseLoaderCallback mLoaderCallback = new BaseLoaderCallback(this) {
      @Override
      public void onManagerConnected(int status) {
          switch (status) {
              case LoaderCallbackInterface.SUCCESS:
              {
                  Log.i("OpenCV", "OpenCV load successfully");
              } break;
              default:
              {
                  super.onManagerConnected(status);
              } break;
          }
      }
  };
}
